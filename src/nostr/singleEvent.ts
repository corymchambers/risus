import {Filter, Relay, SimplePool} from 'nostr-tools';
import {NostrEvent, NostrFilter} from './types';

export const singleNostrEvent = async (
  relays: string[],
  filter: Filter,
): Promise<NostrEvent> =>
  new Promise(resolve => {
    const pool = new SimplePool();
    const sub = pool.sub(relays, [filter]);

    sub.on('event', (event: Event) => {
      console.log('event', event);
      resolve(event);
    });

    sub.on('eose', () => {
      console.log('eose unsub from single event');
      sub.unsub();
    });
  });
