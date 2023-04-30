import AsyncStorage from '@react-native-async-storage/async-storage';
import EncryptedStorage from 'react-native-encrypted-storage';

const KEY = '@risus_';
const ONBOARD_KEY = KEY + 'onboarded5';
const NOSTR_PRIVATE_KEY = KEY + 'private_key';

export const getIsOnboarded = async () => {
  try {
    const onboarded = await AsyncStorage.getItem(ONBOARD_KEY);
    return !!onboarded;
  } catch {
    return false;
  }
};

export const setIsOnboarded = async () => {
  try {
    await AsyncStorage.setItem(ONBOARD_KEY, 'TRUE');
  } catch {
    // Log an error.
  }
};

export const getPrivateKey = async () => {
  try {
    const session = await EncryptedStorage.getItem(NOSTR_PRIVATE_KEY);
    console.log({session});

    if (session !== undefined) {
      return session;
    }

    return null;
  } catch (error) {
    console.error('error getting private key');
    // There was an error on the native side
    return null;
  }
};

export const setPrivateKey = async (key: string) => {
  try {
    await EncryptedStorage.setItem(NOSTR_PRIVATE_KEY, key);
    console.log('set the kery');
    // Congrats! You've just stored your first value!
  } catch (error) {
    console.error('error setting private key');

    // There was an error on the native side
  }
};
