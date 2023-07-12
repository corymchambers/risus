import React, {ReactElement, ReactNode} from 'react';
import {Text, StyleSheet} from 'react-native';

export enum TextStyle {
  LIGHT = 'light',
}

interface Props {
  children: ReactNode;
  style?: TextStyle;
  size?: number;
  color?: string;
}

export default function AppText({children, size, color}: Props): ReactElement {
  let styleOverrides = {};
  styleOverrides = size ? {...styleOverrides, fontSize: size} : styleOverrides;
  styleOverrides = color ? {...styleOverrides, color} : styleOverrides;

  return <Text style={[styles.text, {...styleOverrides}]}>{children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    fontFamily: 'WorkSans-Thin',
    fontSize: 16,
    color: 'white',
    fontWeight: '500',
  },
});
