import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';

export interface Metadata {
  name?: string;
  picture?: string;
  about?: string;
  nip05?: string;
}

export interface Authors {
  [authorPubkey: string]: Metadata;
}

const initialState: Authors = {};

export const themeSlice = createSlice({
  name: 'authors',
  initialState,
  reducers: {
    updateAuthors: (state, action: PayloadAction<Authors[]>) => {
    //   console.log('update authors', action);
      //   state = {...state, [action.payload.pubkey]: action.payload.metadata};
      state = {bob: 'some datate about bob'};
    //   console.log('new state', state);
      //   state = action.payload;
    },
  },
});

export const {updateAuthors} = themeSlice.actions;

export default themeSlice.reducer;
