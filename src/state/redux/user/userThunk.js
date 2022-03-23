import { createAsyncThunk } from '@reduxjs/toolkit';
import userApi from '../../data/userApi';

export const kakaoLogin = createAsyncThunk(
  'user/kakaoLogin',
  async ({ code, navigate }, { dispatch }) => {
    const isLogin = await userApi.kakaoLogin({ code });
    return isLogin;
  },
);

export const googleLogin = createAsyncThunk(
  'user/googleLogin',
  async ({ code, navigate }, { dispatch }) => {
    const isLogin = await userApi.googleLogin({ code });
    return isLogin;
  },
);

export const changeUserName = createAsyncThunk(
  'user/changeUserName',
  async ({ userNameChange }) => {
    // const userName = await ...
    // api 요청하고 success오면 return해서 userName반영
    console.log(userNameChange);
    return userNameChange;
  },
);
