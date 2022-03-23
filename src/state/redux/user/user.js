import { createSlice } from '@reduxjs/toolkit';
import { user } from '../../data/mock';
import { changeUserName } from './userThunk';

const initialState = user;

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(changeUserName.fulfilled, (state, { payload }) => {
        state.userInfo.userName = payload;
      });
  },
});

export default userSlice.reducer;
