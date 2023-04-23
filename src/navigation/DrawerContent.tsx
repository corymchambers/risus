import React, {ReactElement} from 'react';
import {Text, StyleSheet, Image} from 'react-native';

import {DrawerContentScrollView} from '@react-navigation/drawer';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {Colors} from '../styles';

export default function DrawerContent(): ReactElement {
  const insets = useSafeAreaInsets();
  const paddingTop = insets.top;

  return (
    <DrawerContentScrollView
      contentContainerStyle={[styles.container, {paddingTop}]}>
      <Image
        source={require('../assets/images/logo-small.png')}
        style={styles.image}
        resizeMode="contain"
      />
      <Text style={styles.itemText}>Drawer Item 1</Text>
      <Text style={styles.itemText}>Drawer Item 2asdfwd</Text>
      <Text style={styles.itemText}>Drawer Item 3asdfasdfsd</Text>
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.BLACK,
  },
  image: {
    width: '90%',
    alignSelf: 'center',
  },
  itemText: {
    color: 'white',
  },
});
