import React, {ReactElement} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

import {useNavigation} from '@react-navigation/core';

import {tabs} from './tabs';
import {useAppSelector} from '../redux/hooks';

interface Props {
  props: {
    navigation: any;
    route: {
      name: any;
    };
  };
}

const Icon = ({IconType, iconName, fontSize, fontColor}: any) => (
  <IconType name={iconName} size={fontSize} color={fontColor} />
);

export default function CustomTab({props}: Props): ReactElement {
  const theme = useAppSelector(state => state.theme.theme);

  const routeName: any = props?.route?.name;
  const navigation = useNavigation();
  const fontSize = 32;
  const fontColor = props?.navigation?.isFocused()
    ? theme.color5
    : theme.color3;
  const onPress = () => {
    navigation.navigate(routeName as never);
  };
  const borderColor = theme.color3;

  const tabInfo = tabs[routeName];
  return (
    <TouchableOpacity style={[styles.container, {}]} onPress={onPress}>
      <View
        style={[
          styles.innerContainer,
          {borderRightWidth: tabInfo.borderRightWidth, borderColor},
        ]}>
        <Icon
          IconType={tabInfo.icon}
          iconName={tabInfo.iconName}
          fontSize={fontSize}
          fontColor={fontColor}
        />
        <Text style={styles.label}>{tabInfo.label}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 68,
    justifyContent: 'center',
  },
  innerContainer: {
    alignItems: 'center',
  },
  label: {
    color: 'white',
    fontWeight: '500',
    fontSize: 16,
    marginTop: -4,
  },
});
