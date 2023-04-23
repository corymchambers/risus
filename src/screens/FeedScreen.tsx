import React, {ReactElement} from 'react';
import {TouchableOpacity, StyleSheet, Text} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import {useDispatch} from 'react-redux';

import {ScreenProps} from '../navigation/navTypes';
import {Routes} from '../navigation/routes';
import {increment} from '../redux/theme/themeSlice';
import {useAppSelector} from '../redux/hooks';

export default function FeedScreen({
  navigation,
}: ScreenProps<Routes.FeedScreen>): ReactElement {
  const theme = useAppSelector(state => state.theme.value);
  const dispatch = useDispatch();
  return (
    <TouchableOpacity
      onPress={() => dispatch(increment())}
      style={styles.container}>
      <Ionicons name="home" size={32} />
      <Text>{theme}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {},
});
