import React, {ReactElement} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

import Onboarding from 'react-native-onboarding-swiper';

export default function OnboardingScreen({navigation}): ReactElement {
  return (
    <Onboarding
      onDone={() => navigation.navigate('Home')}
      pages={[
        {
          backgroundColor: '#fff',
          // image: <Image source={require('./images/circle.png')} />,
          title: 'Onboarding',
          subtitle: 'Done with React Native Onboarding Swiper',
        },
        {
          backgroundColor: '#fe6e58',
          // image: <Image source={require('./images/square.png')} />,
          title: 'The Title',
          subtitle: 'This is the subtitle that sumplements the title.',
        },
        {
          backgroundColor: '#999',
          // image: <Image source={require('./images/triangle.png')} />,
          title: 'Triangle',
          subtitle: "Beautiful, isn't it?",
        },
      ]}
    />
  );
}

const styles = StyleSheet.create({
  container: {},
});
