import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

import themeReducer from './theme/themeSlice';
import relayReducer from './nostr/relaysSlice';
import authorsReducer from './nostr/authorsSlice';
import userReducer from './user/userSlice';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['theme, user'],
  timeout: null,
};

const rootReducer = combineReducers({
  theme: themeReducer,
  relays: relayReducer,
  authors: authorsReducer,
  user: userReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export const persistor = persistStore(store);

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
