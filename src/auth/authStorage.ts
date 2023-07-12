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
    console.error('error setting onboarded');
  }
};

export const getPrivateKey = async () => {
  try {
    const session = await EncryptedStorage.getItem(NOSTR_PRIVATE_KEY);

    if (session !== undefined) {
      return session;
    }

    return null;
  } catch (error) {
    return null;
  }
};

export const setPrivateKey = async (key: string) => {
  try {
    await EncryptedStorage.setItem(NOSTR_PRIVATE_KEY, key);
  } catch (error) {
    console.error('error setting private key');
  }
};
