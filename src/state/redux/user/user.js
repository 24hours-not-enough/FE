import { createSlice } from '@reduxjs/toolkit';
import { removeToken, setTokenToSession } from '../../../shared/utils';
import {
  changeUserName, kakaoLogin, googleLogin, loginUserInfo, getUser, logout,
} from './userThunk';

// const TRUE = 'true';
// const FALSE = 'false';

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
        console.log(response);
        if (response && response.first === false) {
          setTokenToSession('accessToken', response.tokens.access_token);
          setTokenToSession('refreshToken', response.tokens.refresh_token);
          state.userInfo = response.userInfo;
        }
      })
      .addCase(googleLogin.fulfilled, (state, { payload }) => {
        const { response } = payload;
        console.log(response);
        if (response && response.first === false) {
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
      })
      .addCase(getUser.fulfilled, (state, { payload }) => {
        state.userInfo = payload.userInfo;
        state.bookmark = payload.bookmark;
      })
      .addCase(logout.fulfilled, (state) => {
        removeToken();
        state.userInfo = null;
        state.notification = null;
        state.bookmark = null;
      });
  },
});

export default userSlice.reducer;
