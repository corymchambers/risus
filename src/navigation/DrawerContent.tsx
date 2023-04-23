import React, {ReactElement} from 'react';
import {Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

import {DrawerContentScrollView} from '@react-navigation/drawer';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {useAppSelector} from '../redux/hooks';
import {Routes} from './routes';

export default function DrawerContent({navigation}): ReactElement {
  const theme = useAppSelector(state => state.theme.theme);
  // console.log({theme});
  const insets = useSafeAreaInsets();
  const paddingTop = insets.top;
  const backgroundColor = theme.color1;

  return (
    <DrawerContentScrollView
      contentContainerStyle={[styles.container, {paddingTop, backgroundColor}]}>
      <Image source={theme.logoSrc} style={styles.image} resizeMode="contain" />
      <TouchableOpacity
        onPress={() => navigation.navigate(Routes.ThemesScreen)}>
        <Text style={styles.itemText}>Themes</Text>
      </TouchableOpacity>
      <Text style={styles.itemText}>Drawer Item 2asdfwd</Text>
      <Text style={styles.itemText}>Drawer Item 3asdfasdfsd</Text>
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
