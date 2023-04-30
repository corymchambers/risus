import 'react-native-gesture-handler';
import 'react-native-url-polyfill/auto';

import React, {useEffect} from 'react';

import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';

import {persistor, store} from './src/redux/store';
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
      <PersistGate loading={null} persistor={persistor}>
        <Navigator />
      </PersistGate>
    </Provider>
  );
}

export default App;
