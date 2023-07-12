import React, {ReactElement} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

import {useAppDispatch, useAppSelector} from '../redux/hooks';
import {updateTheme} from '../redux/theme/themeSlice';
import * as t from '../theme/themes';

export default function ThemesScreen(): ReactElement {
  const theme = useAppSelector(state => state.theme.theme);
  const dispatch = useAppDispatch();
  const updatePressed = (newTheme: t.Theme) => {
    dispatch(updateTheme(newTheme));
  };

  return (
    <View style={styles.container}>
      <View style={styles.sampleContainer}>
        <View style={[styles.sampleColor, {backgroundColor: theme.color1}]} />
        <View style={[styles.sampleColor, {backgroundColor: theme.color2}]} />
        <View style={[styles.sampleColor, {backgroundColor: theme.color3}]} />
        <View style={[styles.sampleColor, {backgroundColor: theme.color4}]} />
        <View style={[styles.sampleColor, {backgroundColor: theme.color5}]} />
      </View>
      <TouchableOpacity
        onPress={() => updatePressed(t.themes[t.THEME_ORIGINAL])}>
        <Text style={styles.text}>Original</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => updatePressed(t.themes[t.THEME_WINTER])}>
        <Text style={styles.text}>Winter</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => updatePressed(t.themes[t.THEME_SPRING])}>
        <Text style={styles.text}>Spring</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => updatePressed(t.themes[t.THEME_SUMMER])}>
        <Text style={styles.text}>Summer</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => updatePressed(t.themes[t.THEME_FALL])}>
        <Text style={styles.text}>Fall</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  sampleColor: {
    width: 75,
    height: 75,
  },
  sampleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  text: {
    fontSize: 18,
  },
});
