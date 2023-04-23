import 'react-native-gesture-handler';

import React, {useEffect, useState} from 'react';

import SplashScreen from 'react-native-splash-screen';
import {Provider} from 'react-redux';

import {store} from './src/redux/store';

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
    <Provider store={store}>
      <AuthContext.Provider value={{onboarded, setOnboarded}}>
        <Navigator />
      </AuthContext.Provider>
    </Provider>
  );
}

export default App;
