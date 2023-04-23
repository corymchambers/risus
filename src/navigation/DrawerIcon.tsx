import React, {ReactElement} from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';

import {useNavigation} from '@react-navigation/native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import {Colors} from '../styles';

export default function DrawerIcon(): ReactElement {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={navigation.toggleDrawer}
      style={styles.container}>
      <Ionicons name="menu" size={32} color={Colors.ORANGE} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 8,
  },
});
