import React, {ReactElement} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

import {useNavigation} from '@react-navigation/core';

import {Colors} from '../styles';
import {tabs} from './tabs';

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
  const routeName: any = props?.route?.name;
  const navigation = useNavigation();
  const fontSize = 32;
  const fontColor = props?.navigation?.isFocused() ? '#e28e33' : '#736038';
  const onPress = () => {
    navigation.navigate(routeName as never);
  };

  const tabInfo = tabs[routeName];
  return (
    <TouchableOpacity style={[styles.container]} onPress={onPress}>
      <View
        style={[
          styles.innerContainer,
          {borderRightWidth: tabInfo.borderRightWidth},
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
    backgroundColor: Colors.BLACK,
    flex: 1,
    height: 68,
    justifyContent: 'center',
  },
  innerContainer: {
    alignItems: 'center',
    borderColor: Colors.LIGHT_GREEN,
  },
  label: {
    color: 'white',
    fontWeight: '500',
    fontSize: 16,
    marginTop: -4,
  },
});
