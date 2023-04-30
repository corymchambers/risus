import React, {ReactElement} from 'react';
import {Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

import {DrawerContentScrollView} from '@react-navigation/drawer';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {useAppDispatch, useAppSelector} from '../redux/hooks';
import {Routes} from './routes';
import AppText from '../components/AppText';
import {updateNostrPrivateKey} from '../redux/user/userSlice';
import {setPrivateKey} from '../auth/authStorage';

export default function DrawerContent({navigation}): ReactElement {
  const dispatch = useAppDispatch();
  const theme = useAppSelector(state => state.theme.theme);
  const {nostrPrivateKey} = useAppSelector(state => state.user);
  // console.log({theme});
  const insets = useSafeAreaInsets();
  const paddingTop = insets.top;
  const backgroundColor = theme.color1;

  const backToLoginMethod = async (logout = false) => {
    if (logout) {
      dispatch(updateNostrPrivateKey(null));
      await setPrivateKey('');
    }
    navigation.navigate(Routes.LoginMethodScreen);
  };

  return (
    <DrawerContentScrollView
      contentContainerStyle={[styles.container, {paddingTop, backgroundColor}]}>
      <Image source={theme.logoSrc} style={styles.image} resizeMode="contain" />
      <TouchableOpacity
        onPress={() => navigation.navigate(Routes.ThemesScreen)}>
        <AppText>Themes</AppText>
      </TouchableOpacity>
      {nostrPrivateKey ? (
        <TouchableOpacity onPress={() => backToLoginMethod(true)}>
          <AppText>Logout</AppText>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={backToLoginMethod}>
          <AppText>Login/Signup</AppText>
        </TouchableOpacity>
      )}
      <AppText>Drawer Item 2asdfwd</AppText>
      <AppText>Drawer Item 3asdfasdfsd</AppText>
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
