import React, {ReactElement} from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';

import {useNavigation} from '@react-navigation/native';

import Ionicons from 'react-native-vector-icons/Ionicons';

import {useAppSelector} from '../redux/hooks';

export default function DrawerIcon(): ReactElement {
  const theme = useAppSelector(state => state.theme.theme);
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={navigation.toggleDrawer}
      style={styles.container}>
      <Ionicons name="menu" size={32} color={theme.color5} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 8,
  },
});
