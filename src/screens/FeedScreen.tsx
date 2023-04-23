import React, {ReactElement} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import { DrawerActions } from '@react-navigation/native';

import Ionicons from 'react-native-vector-icons/Ionicons';
export default function FeedScreen({navigation}): ReactElement {
  return (
    <TouchableOpacity
      onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
      style={styles.container}>
      <Ionicons name="home" size={32} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {},
});
