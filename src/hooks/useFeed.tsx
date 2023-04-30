import 'text-encoding-polyfill';

import {useEffect, useRef, useState} from 'react';

import {SimplePool, nip19} from 'nostr-tools';
import {useDebounce} from 'use-debounce';

import {useAppSelector} from '../redux/hooks';
import {Metadata} from '../redux/nostr/authorsSlice';
import {insertEventIntoDescendingList} from '../utils/nostrHepers';

export default function useFeed() {
  const relays = useAppSelector(state => state.relays);
  const [pool, setPool] = useState<SimplePool | null>(null);
  const [eventsImmediate, setEvents] = useState<Event[]>([]);
  const [feed] = useDebounce(eventsImmediate, 1500);
  const [authors, setAuthors] = useState<Record<string, Metadata>>({});
  const metadataFetched = useRef<Record<string, boolean>>({});

  // Setup relay pool.
  useEffect(() => {
    console.log({relays});
    const _pool = new SimplePool();
    console.log('set pool', _pool);
    setPool(_pool);

    return () => {
      console.log('CLOSE DOWN POOLS');
      _pool.close(relays);
    };
  }, [relays]);

  // Subscribe to events.
  useEffect(() => {
    if (!pool) {
      console.log('no pool');
      return;
    }

    const sub = pool.sub(relays, [
      {
        kinds: [1],
        limit: 2,
      },
    ]);

    sub.on('event', (event: Event) => {
      console.log({event});
      setEvents(prevEvents => insertEventIntoDescendingList(prevEvents, event));
    });
  }, [pool, relays]);

  // Get author data.
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
  }, [feed, pool]);

  const displayPubkey = pubkey => {
    return `${nip19.npubEncode(pubkey).slice(0, 10)}...`;
  };

  return {feed, authors, displayPubkey};
}
