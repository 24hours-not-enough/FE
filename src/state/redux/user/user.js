import { createSlice } from '@reduxjs/toolkit';
import { setTokenToSession } from '../../../shared/utils';
import {
  changeUserName, kakaoLogin, googleLogin, loginUserInfo,
} from './userThunk';

const TRUE = 'true';
const FALSE = 'false';

const initialState = {
  userInfo: null,
  notification: null,
  bookmark: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(kakaoLogin.fulfilled, (state, { payload }) => {
        const { response } = payload;
        if (response && response.isFirst === FALSE) {
          setTokenToSession('accessToken', response.tokens.access_token);
          setTokenToSession('refreshToken', response.tokens.refresh_token);
          state.userInfo = response.userInfo;
        }
      })
      .addCase(googleLogin.fulfilled, (state, { payload }) => {
        const { response } = payload;
        if (response && response.isFirst === FALSE) {
          setTokenToSession('accessToken', response.tokens.access_token);
          setTokenToSession('refreshToken', response.tokens.refresh_token);
          state.userInfo = response.userInfo;
        }
      })
      .addCase(changeUserName.fulfilled, (state, { payload }) => {
        state.userInfo.userName = payload;
      })
      .addCase(loginUserInfo.fulfilled, (state, { payload }) => {
        const { response } = payload;
        if (response) {
          setTokenToSession('accessToken', response.tokens.access_token);
          setTokenToSession('refreshToken', response.tokens.refresh_token);
          state.userInfo = response.userInfo;
        }
      });
  },
});

export default userSlice.reducer;
