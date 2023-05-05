import {Filter, Relay, SimplePool, getEventHash, signEvent} from 'nostr-tools';
import {NostrEvent, NostrFilter} from './types';

import * as secp256k1 from '@noble/secp256k1';

// Reset the nobel and nostr tools package and try to replace the random bytes, if no use exporandom
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

export const publishNostrEvent = async (
  relays: any,
  post: string,
  pubKey: string,
  privateKey: string,
): Promise<NostrEvent> =>
  new Promise(resolve => {
    const newEvent = {
      kind: 1,
      pubkey: pubKey,
      created_at: Math.floor(Date.now() / 1000),
      content: post,
      tags: [],
    };
    console.log('get event hash', newEvent);
    newEvent.id = getEventHash(newEvent);
    console.log('passed event hash');
    // @ts-expect-error
    console.log('sign event', privateKey, newEvent);
    newEvent.sig = signEvent(newEvent, privateKey);
    console.log('create pool');
    const pool = new SimplePool();
    console.log('publish', newEvent);
    let pubs = pool.publish(relays, newEvent);
    pubs.on('ok', () => {
      // this may be called multiple times, once for every relay that accepts the event
      // ...
      console.log('yay it worked');
    });
  });
