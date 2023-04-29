import React, {ReactElement} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

interface Props {
  title: string;
  onPress: () => void;
  color?: string | null;
}
export default function AppButton({
  title,
  onPress,
  color = null,
}: Props): ReactElement {
  const containerStyles = {
    backgroundColor: color ?? '#3c4a3b',
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, containerStyles]}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 48,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 24,
    fontFamily: 'WorkSans-Thin',
    fontWeight: '500',
    letterSpacing: 0.5,
  },
});
