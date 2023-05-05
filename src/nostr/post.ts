import {publishNostrEvent, singleNostrEvent} from './singleEvent';
import {Kinds} from './types';

export const publishPost = (relays, post, pubKey, privateKey): Promise<string[]> => {
  publishNostrEvent(relays, post, pubKey, privateKey);
};
