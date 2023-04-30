import 'react-native-gesture-handler';
import 'react-native-url-polyfill/auto';

import React, {useEffect} from 'react';

import {Provider} from 'react-redux';

import {store} from './src/redux/store';

import {getIsOnboarded} from './src/auth/authStorage';

import Navigator from './src/navigation/Navigator';

function App(): JSX.Element {
  useEffect(() => {
    checkOnboarded();
  }, []);

  const checkOnboarded = async () => {
    const isOnboarded = await getIsOnboarded();
    if (isOnboarded) {
    }
  };

  return (
    <Provider store={store}>
      <Navigator />
    </Provider>
  );
}

export default App;
