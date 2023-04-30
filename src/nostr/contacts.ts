import {singleNostrEvent} from './singleEvent';
import {Kinds} from './types';

export const getContacts = (relays, pubKey): Promise<string[]> =>
  new Promise((resolve, reject) => {
    const contactList: string[] = [];
    singleNostrEvent(relays, {
      kinds: [Kinds.CONTACTS],
      authors: [pubKey],
    })
      .then(res => {
        if (Array.isArray(res?.tags)) {
          for (const tag of res.tags) {
            if (Array.isArray(tag) && tag.length > 1) {
              contactList.push(tag[1]);
            }
          }
        }
        resolve(contactList);
      })
      .catch(() => reject());
  });
