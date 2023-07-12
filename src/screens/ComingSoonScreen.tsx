import React, {ReactElement} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {Theme} from '../styles/Theme';
import {useTheme} from '../hooks/useTheme';

export default function ComingSoonScreen(): ReactElement {
  const {theme} = useTheme();
  return (
    <View
      style={[Theme.container, styles.center, {backgroundColor: theme.color1}]}>
      <Text style={styles.text}>Coming Soon!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  center: {
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 24,
  },
});
