import React, {ReactElement} from 'react';
import {StyleSheet, Image} from 'react-native';

import Onboarding from 'react-native-onboarding-swiper';
import { Routes } from '../../navigation/routes';

interface Props {
  markOnboarded: () => void;
}

export default function OnboardingScreen({navigation}): ReactElement {
  const doneOnboarding = () => {
    // console.log('done');
    // markOnboarded();
    navigation.navigate(Routes.LoginMethodScreen);
  };
  return (
    <Onboarding
      onDone={doneOnboarding}
      pages={[
        {
          backgroundColor: '#aa7735',
          image: (
            <Image source={require('../../assets/images/logo-small.png')} />
          ),
          title: 'Risus',
          subtitle: 'A new decentralized way to communicate',
        },
        {
          backgroundColor: '#736038',
          image: (
            <Image source={require('../../assets/images/logo-small.png')} />
          ),
          title: 'Feed',
          subtitle: 'Some information about the feed',
        },
        {
          backgroundColor: '#3c4a3b',
          image: (
            <Image source={require('../../assets/images/logo-small.png')} />
          ),
          title: 'Messaging',
          subtitle: 'Some information about the messaging',
        },
        {
          backgroundColor: '#e28e33',
          image: (
            <Image source={require('../../assets/images/logo-small.png')} />
          ),
          title: 'See this again?',
          subtitle: 'If you need help access help from the side drawer.',
        },
      ]}
    />
  );
}
