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

export const authorsSlice = createSlice({
  name: 'authors',
  initialState,
  reducers: {
    updateAuthors: (state, action: PayloadAction<Authors[]>) => {
      state = action.payload;
    },
  },
});

export const {updateAuthors} = authorsSlice.actions;

export default authorsSlice.reducer;
