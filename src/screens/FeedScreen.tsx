import 'text-encoding-polyfill';

import React, {useEffect, useLayoutEffect, useRef, useState} from 'react';
import {View} from 'react-native';

import {FlashList} from '@shopify/flash-list';
import {useDebounce} from 'use-debounce';
import {Event, SimplePool} from 'nostr-tools';

import Post from '../components/feed/Post';
import {useAppSelector} from '../redux/hooks';
import NewPostBtn from '../components/feed/NewPostBtn';
import {ScreenProps} from '../navigation/navTypes';
import {Routes} from '../navigation/routes';
import NewPostModal from '../components/feed/NewPostModal';
import {Theme} from '../styles/Theme';
import {useTheme} from '../hooks/useTheme';
import {insertEventIntoDescendingList} from '../utils/nostrHepers';
import {Metadata} from '../redux/nostr/authorsSlice';

const NewPost = (newPostPressed: () => void) => (
  <NewPostBtn onPress={newPostPressed} />
);

export default function FeedScreen({
  navigation,
}: ScreenProps<Routes.FeedScreen>) {
  const relays = useAppSelector(state => state.relays);
  const {contacts} = useAppSelector(state => state.user);

  const {theme} = useTheme();
  const [modalVisible, setModalVisible] = useState(false);
  const metadataFetched = useRef<Record<string, boolean>>({});
  const [authors, setAuthors] = useState<Record<string, Metadata>>({});

  const [pool, setPool] = useState<SimplePool | null>(null);
  const [eventsImmediate, setEvents] = useState<Event[]>([]);
  const [feed] = useDebounce(eventsImmediate, 1500);

  useEffect(() => {
    const _pool = new SimplePool();
    setPool(_pool);

    return () => {
      // console.log('CLOSE DOWN POOLS');
      _pool.close(relays);
    };
  }, [relays]);

  useEffect(() => {
    if (!pool) {
      return;
    }

    const sub = pool.sub(relays, [
      {
        kinds: [1],
        limit: 100,
        authors: contacts,
      },
    ]);

    sub.on('event', (event: Event) => {
      setEvents(prevEvents => insertEventIntoDescendingList(prevEvents, event));
    });

    sub.on('eose', () => {
      sub.unsub();
    });
  }, [contacts, pool, relays]);

  useEffect(() => {
    if (!pool) {
      return;
    }

    const pubkeysToFetch = feed
      .filter(event => metadataFetched.current[event.pubkey] !== true)
      .map(event => event.pubkey);

    pubkeysToFetch.forEach(pubkey => (metadataFetched.current[pubkey] = true));

    const sub = pool.sub(relays, [
      {
        kinds: [0],
        authors: pubkeysToFetch,
      },
    ]);

    sub.on('event', (event: Event) => {
      const metadata = JSON.parse(event.content) as Metadata;

      setAuthors(cur => ({
        ...cur,
        [event.pubkey]: metadata,
      }));
    });

    sub.on('eose', () => {
      sub.unsub();
    });

    return () => {};
  }, [feed, pool, relays]);

  const newPostPressed = () => {
    setModalVisible(true);
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => NewPost(newPostPressed),
    });
  });

  return (
    <View style={[Theme.container, {backgroundColor: theme.color1}]}>
      <FlashList
        data={feed}
        renderItem={({item}) => (
          <Post post={item} author={authors[item.pubkey]} />
        )}
        estimatedItemSize={200}
      />
      <NewPostModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
    </View>
  );
}
