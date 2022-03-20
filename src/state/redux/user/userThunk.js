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
