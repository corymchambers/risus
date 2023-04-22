import React, {ReactElement} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
export default function FeedScreen(props): ReactElement {
  return (
    <View style={styles.container}>
      <Ionicons name="home" size={32} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});
