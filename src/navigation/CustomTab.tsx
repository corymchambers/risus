import {useNavigation} from '@react-navigation/core';
import React, {ReactElement} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function CustomTab({props}): ReactElement {
  const routeName = props?.route?.name;
  const navigation = useNavigation();
  const fontSize = 32;
  const fontColor = props?.navigation?.isFocused() ? '#e28e33' : '#736038';
  const onPress = () => {
    navigation.navigate(routeName);
  };
  let IconType = Ionicons;
  let iconName = 'people';
  let borderRightWidth = 0.5;
  if (routeName === 'Details') {
    IconType = MaterialCommunityIcons;
    iconName = 'message';
  } else if (routeName === 'Search') {
    iconName = 'search';
  } else if (routeName === 'Trending') {
    IconType = MaterialCommunityIcons;
    iconName = 'sunglasses';
    borderRightWidth = 0;
  }
  const Icon = () => (
    <IconType
      name={iconName}
      size={fontSize}
      color={fontColor}
      style={{borderWidth: 0, borderColor: 'white'}}
    />
  );
  console.log(props);
  return (
    <TouchableOpacity style={[styles.container]} onPress={onPress}>
      <View style={[styles.innerContainer, {borderRightWidth}]}>
        <Icon />
        <Text style={styles.label}>{routeName}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000007',
    flex: 1,
    height: 68,
    // borderRightWidth: 1,
    justifyContent: 'center',
  },
  innerContainer: {
    alignItems: 'center',
    borderColor: '#736038',
  },
  label: {
    color: 'white',
    fontWeight: '500',
    fontSize: 16,
    marginTop: -4,
  },
});
