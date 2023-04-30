import React, {ReactElement, useEffect, useCallback} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

import {getIsOnboarded, getPrivateKey} from '../../auth/authStorage';
import {useAppDispatch} from '../../redux/hooks';
import {updateNostrPrivateKey} from '../../redux/user/userSlice';
import {Routes} from '../../navigation/routes';
import {ScreenProps} from '../../navigation/navTypes';
import {Colors} from '../../styles';

export default function SplashScreen({
  navigation,
}: ScreenProps<Routes.SplashScreen>): ReactElement {
  const dispatch = useAppDispatch();

  const setUserState = useCallback(async () => {
    const getKey = await getPrivateKey();
    if (getKey) {
      dispatch(updateNostrPrivateKey(getKey));
    }
  }, [dispatch]);

  useEffect(() => {
    setUserState();
    setTimeout(async () => {
      console.log('check onboard and redirect');
      const onboarded = await getIsOnboarded();
      if (onboarded) {
        navigation.navigate(Routes.TabsStack);
      } else {
        navigation.navigate(Routes.OnboardingScreen);
      }
    }, 2000);
  }, [navigation, setUserState]);

  return (
    <View style={styles.container}>
      <Image
        style={{borderWidth: 0, borderColor: 'white', bottom: '20%'}}
        source={require('../../assets/images/logo-small.png')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.BLACK,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // borderWidth: 1,
    borderColor: 'white',
  },
});
