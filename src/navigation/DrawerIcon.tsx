import {useNavigation} from '@react-navigation/native';
import React, {ReactElement} from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

export default function DrawerIcon(props): ReactElement {
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={navigation.toggleDrawer}>
      <Text>X</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {},
});
