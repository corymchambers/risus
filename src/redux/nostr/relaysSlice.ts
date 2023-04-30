import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';

const initialState: string[] = [
  // 'wss://nostr-pub.wellorder.net',
  // 'wss://nostr.drss.io',
  // 'wss://nostr.swiss-enigma.ch',
  'wss://relay.damus.io',
];

export const themeSlice = createSlice({
  name: 'relays',
  initialState,
  reducers: {
    updateRelays: (state, action: PayloadAction<string[]>) => {
      state = action.payload;
    },
  },
});

export const {updateRelays} = themeSlice.actions;

export default themeSlice.reducer;
