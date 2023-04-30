import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';

export interface UserKeys {
  public: string;
  private: string;
}

interface UserState {
  pubKey: string;
  privateKey: string;
  onboarded: string;
  contacts: string[];
  displayName: string;
  name: string;
  website: string;
  about: string;
}

const initialState: UserState = {
  pubKey: '',
  privateKey: '',
  onboarded: '',
  contacts: [],
  displayName: '',
  name: '',
  website: '',
  about: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateUserKeys: (state, action: PayloadAction<UserKeys>) => {
      state.pubKey = action.payload.public;
      state.privateKey = action.payload.private;
    },
    updateOnboarded: (state, action: PayloadAction<string>) => {
      state.onboarded = action.payload;
    },
    updateContacts: (state, action: PayloadAction<string[]>) => {
      state.contacts = action.payload;
    },
    updateUserInfo: (state, action: PayloadAction<{}>) => {
      state.displayName = action.payload?.displayName ?? '';
      state.name = action.payload?.name ?? '';
      state.website = action.payload?.website ?? '';
      state.about = action.payload?.about ?? '';
    },
    resetUser: state => {
      console.log('reset user');
      return {...initialState, onboarded: state.onboarded};
    },
  },
});

export const {
  updateUserKeys,
  updateOnboarded,
  updateContacts,
  updateUserInfo,
  resetUser,
} = userSlice.actions;

export default userSlice.reducer;
