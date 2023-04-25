import {configureStore} from '@reduxjs/toolkit';

import themeReducer from './theme/themeSlice';
import relayReducer from './nostr/relaysSlice';
import authorsReducer from './nostr/authorsSlice';

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    relays: relayReducer,
    authors: authorsReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
