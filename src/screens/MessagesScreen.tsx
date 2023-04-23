import React, {ReactElement} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function MessagesScreen(props): ReactElement {
  return (
    <View style={styles.container}>
      <Text>messages</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});
