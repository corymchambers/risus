import React, {ReactElement} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function DrawerContent(props): ReactElement {
  return (
    <View>
      <Text>Custom Drawer</Text>
      <Text>Drawer Item 1</Text>
      <Text>Drawer Item 2</Text>
      <Text>Drawer Item 3</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});
