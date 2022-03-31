import { createSlice } from '@reduxjs/toolkit';
import { setTokenToSession } from '../../../shared/utils';
import {
  changeUserName, kakaoLogin, googleLogin,
} from './userThunk';
import { user } from '../../data/mock';

// const TRUE = 'true';
// const FALSE = 'false';

const initialState = {
  userInfo: user,
  notification: null,
  bookmark: null,
};

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
