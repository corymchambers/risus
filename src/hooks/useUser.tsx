import {useAppDispatch, useAppSelector} from '../redux/hooks';
import {getContacts} from '../nostr/contacts';
import {getProfile} from '../nostr/profile';
import {updateContacts, updateUserInfo} from '../redux/user/userSlice';

export interface ProfileContacts {
  profile: {};
  contacts: {};
}
export default function useUser() {
  const dispatch = useAppDispatch();
  const relays = useAppSelector(state => state.relays);
  const updateProfileContacts = async (pubKey: string) => {
    //TODO: since these can't really fail you might want some global indicator and then redirect to thome screen so the user knows it's waiting to get their following

    try {
      const [profile, contacts] = await Promise.all([
        getProfile(relays, pubKey),
        getContacts(relays, pubKey),
      ]);

      dispatch(updateContacts(contacts));
      dispatch(updateUserInfo(profile));

      return true;
    } catch {
      console.error('Error getting profile or contacts');
    }
  };
  return {updateProfileContacts};
}
