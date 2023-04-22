import AsyncStorage from '@react-native-async-storage/async-storage';

const KEY = '@risus_';
const ONBOARD_KEY = KEY + 'onboarded3';

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
