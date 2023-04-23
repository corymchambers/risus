import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';

import {Theme, themes, THEME_ORIGINAL} from '../../theme/themes';

export interface ThemeState {
  theme: Theme;
}

const initialState: ThemeState = {
  theme: themes[THEME_ORIGINAL],
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    updateTheme: (state, action: PayloadAction<Theme>) => {
      state.theme = action.payload;
    },
  },
});

export const {updateTheme} = themeSlice.actions;

export default themeSlice.reducer;
