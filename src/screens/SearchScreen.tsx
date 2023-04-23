import React, {ReactElement} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function SearchScreen(props): ReactElement {
  return (
    <View style={styles.container}>
      <Text>search</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});
