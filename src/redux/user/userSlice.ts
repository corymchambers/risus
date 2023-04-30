import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';

export interface UserState {
  onboarded: boolean;
  nostrPrivateKey: string | null;
}

const initialState: UserState = {
  onboarded: false,
  nostrPrivateKey: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateOnboarded: (state, action: PayloadAction<boolean>) => {
      state.onboarded = action.payload;
    },
    updateNostrPrivateKey: (state, action: PayloadAction<string | null>) => {
      state.nostrPrivateKey = action.payload;
    },
  },
});

export const {updateOnboarded, updateNostrPrivateKey} = userSlice.actions;

export default userSlice.reducer;
