import React, {ReactElement} from 'react';
import {Text, StyleSheet, Image} from 'react-native';

import {DrawerContentScrollView} from '@react-navigation/drawer';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {useAppSelector} from '../redux/hooks';

export default function DrawerContent(): ReactElement {
  const theme = useAppSelector(state => state.theme.theme);
  console.log({theme});
  const insets = useSafeAreaInsets();
  const paddingTop = insets.top;
  const backgroundColor = theme.color1;

  return (
    <DrawerContentScrollView
      contentContainerStyle={[styles.container, {paddingTop, backgroundColor}]}>
      <Image source={theme.logoSrc} style={styles.image} resizeMode="contain" />
      <Text style={styles.itemText}>Drawer Item 1</Text>
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
