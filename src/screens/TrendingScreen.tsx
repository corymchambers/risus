import React, {ReactElement} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function TrendingScreen(props): ReactElement {
  return (
    <View style={styles.container}>
      <Text>trending</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});
