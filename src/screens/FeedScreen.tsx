import React, {ReactElement} from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';

import {ScreenProps} from '../navigation/navTypes';
import {Routes} from '../navigation/routes';

export default function FeedScreen({
  navigation,
}: ScreenProps<Routes.FeedScreen>): ReactElement {
  return (
    <TouchableOpacity
      // onPress={() => dispatch(increment())}
      style={styles.container}>
      <Ionicons name="home" size={32} />
      {/* <Text>{theme}</Text> */}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {},
});
