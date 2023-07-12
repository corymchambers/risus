import React, {ReactElement} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';

import {useAppSelector} from '../../redux/hooks';

interface Props {
  onPress: () => void;
}

export default function NewPostBtn({onPress}: Props): ReactElement {
  const {theme} = useAppSelector(state => state.theme);

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Ionicons name="add" size={36} color={theme.color5} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {},
});
