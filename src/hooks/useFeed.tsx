import 'text-encoding-polyfill';

import {useEffect, useRef, useState} from 'react';

import {nip19, relayInit} from 'nostr-tools';
import {useDebounce} from 'use-debounce';

import {useAppDispatch, useAppSelector} from '../redux/hooks';
import {Metadata, updateAuthors} from '../redux/nostr/authorsSlice';

export default function useFeed() {
  const relays = useAppSelector(state => state.relays);
  const authors = useAppSelector(state => state.authors);
  const [feed, setFeed] = useState([]);
  const [debouncedFeed] = useDebounce(feed, 1000);
  const authorsFetched = useRef<Record<string, boolean>>({});
  const dispatch = useAppDispatch();

  //   console.log({authors});
  useEffect(() => {

    relays.forEach(async relayUrl => {
      try {
        const relay = relayInit(relayUrl);
        await relay.connect();

        relay.on('connect', () => {
          console.log('connected to2: ', relayUrl);
        });

        relay.on('error', e => {
          //   console.log('relay.on error: ', relayUrl, e);
          relay.close();
        });

        const sub = relay.sub([
          {
            kinds: [1],
            limit: 2,
            // '#t': ['twitter'],
          },
        ]);

        sub.on('event', event => {
          console.log('event on url', relayUrl, event);
          const authorSub = relay.sub([
            {
              kinds: [0],
              authors: [event.pubkey],
            },
          ]);
          authorSub.on('event', authorEvent => {
            const metadata = JSON.parse(authorEvent.content) as Metadata;
            const eventWithAuthor = {...event, ...metadata};
            // console.log({eventWithAuthor});
            setFeed(prev => [...prev, eventWithAuthor]);
            // console.log({metadata});
          });

          authorSub.on('eose', () => {
            // console.log('unsub');
            authorSub.unsub();
          });
        });
      } catch (e) {
        // console.log('error with init relay', relay.url, e);
      }
    });
  }, [relays]);

  useEffect(() => {
    // console.log('debounced feed');
    const authorsToFetch = debouncedFeed
      .filter(event => !authorsFetched[event.pubkey])
      .map(event => event.pubkey);

    // console.log(authorsToFetch);

    authorsToFetch.forEach(pubkey => (authorsFetched[pubkey] = true));
    relays.forEach(async relayUrl => {
      try {
        const relay = relayInit(relayUrl);
        await relay.connect();

        relay.on('connect', () => {
          // console.log('connected to2: ', relay.url);
        });

        relay.on('error', e => {
          //   console.log('relay.on error: ', relay.url, e);
          relay.close();
        });

        const sub = relay.sub([
          {
            kinds: [0],
            authors: authorsToFetch,
          },
        ]);

        sub.on('event', event => {
          // console.log('author event', event);
          const metadata = JSON.parse(event.content) as Metadata;
          //   console.log('DATA', event.pubkey, metadata)
          dispatch(updateAuthors({pubkey: event.pubkey, metadata}));
          //   setMetadata(curr => ({
          //     ...curr,
          //     [event.pubkey]: metadata,
          //   }));
        });

        sub.on('eose', () => {
          sub.unsub();
        });
      } catch (e) {
        console.log('error with init relay', relay, e);
      }
    });
  }, [debouncedFeed]);

  const displayPubkey = pubkey => {
    return `${nip19.npubEncode(pubkey).slice(0, 10)}...`;
  };

  return {feed, displayPubkey};
}
