import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';

export interface Post {
  title: string;
}

const initialState: Post[] = [];

export const themeSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    updatePosts: (state, action: PayloadAction<Post[]>) => {
      state = action.payload;
    },
  },
});

export const {updatePosts} = themeSlice.actions;

export default themeSlice.reducer;
