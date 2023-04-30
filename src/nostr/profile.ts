import {singleNostrEvent} from './singleEvent';
import {Kinds} from './types';

export const getProfile = (relays, pubKey): Promise<{}> =>
  new Promise((resolve, reject) => {
    singleNostrEvent(relays, {
      kinds: [Kinds.PROFILE],
      authors: [pubKey],
    })
      .then(res => {
        try {
          const content = JSON.parse(res?.content);
          resolve(content);
        } catch {
          resolve({});
        }
      })
      .catch(() => reject());
  });
