import React, {ReactElement} from 'react';
import {StyleSheet, Image, TouchableOpacity} from 'react-native';

import {DrawerContentScrollView} from '@react-navigation/drawer';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {useAppDispatch, useAppSelector} from '../redux/hooks';
import {Routes} from './routes';
import AppText from '../components/AppText';
import {resetUser} from '../redux/user/userSlice';

export default function DrawerContent({navigation}): ReactElement {
  const dispatch = useAppDispatch();
  const theme = useAppSelector(state => state.theme.theme);
  const {pubKey} = useAppSelector(state => state.user);
  const insets = useSafeAreaInsets();
  const paddingTop = insets.top;
  const backgroundColor = theme.color1;

  const backToLoginMethod = async (logout = false) => {
    if (logout) {
      dispatch(resetUser());
    }
    navigation.navigate(Routes.LoginMethodScreen);
  };

  const comingSoonPressed = () => {
    navigation.navigate(Routes.ComingSoonScreen);
  };

  return (
    <DrawerContentScrollView
      contentContainerStyle={[styles.container, {paddingTop, backgroundColor}]}>
      <Image source={theme.logoSrc} style={styles.image} resizeMode="contain" />
      <TouchableOpacity
        onPress={() => navigation.navigate(Routes.ThemesScreen)}>
        <AppText>Themes</AppText>
      </TouchableOpacity>
      {pubKey ? (
        <TouchableOpacity onPress={() => backToLoginMethod(true)}>
          <AppText>Logout</AppText>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={backToLoginMethod}>
          <AppText>Login/Signup</AppText>
        </TouchableOpacity>
      )}
      <TouchableOpacity onPress={comingSoonPressed}>
        <AppText>Coming Soon</AppText>
      </TouchableOpacity>
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: '90%',
    alignSelf: 'center',
  },
  itemText: {
    color: 'white',
  },
});
