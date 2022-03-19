import { createSlice } from '@reduxjs/toolkit';
import { kakaoSignIn } from './userThunk';
import { user } from '../../data/mock';

const initialState = user;

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(kakaoSignIn.fulfilled, (state, { payload }) => ({
        ...state,
      }))
      .addMatcher(
        (action) => action.type.includes('/fulfilled'),
        (state, action) => ({
          ...state,
          // loading state관리 필요한것만
        }),
      )
      .addMatcher(
        (action) => action.type.includes('/rejected'),
        (state, action) => ({
          ...state,
        }),
      )
      .addDefaultCase((state, action) => {});
  },
});

export default userSlice.reducer;
