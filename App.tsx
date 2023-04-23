import 'react-native-gesture-handler';

import React, {useEffect, useState} from 'react';

import SplashScreen from 'react-native-splash-screen';
import AuthContext from './src/auth/authContext';
import {getIsOnboarded} from './src/auth/authStorage';

import Navigator from './src/navigation/Navigator';

function App(): JSX.Element {
  const [onboarded, setOnboarded] = useState(false);

  useEffect(() => {
    checkOnboarded();
  }, []);

  const checkOnboarded = async () => {
    const isOnboarded = await getIsOnboarded();
    if (isOnboarded) {
      setOnboarded(true);
    }
  };

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <AuthContext.Provider value={{onboarded, setOnboarded}}>
      <Navigator />
    </AuthContext.Provider>
  );
}

export default App;
