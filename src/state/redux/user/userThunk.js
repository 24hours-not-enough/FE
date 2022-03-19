import { createAsyncThunk } from '@reduxjs/toolkit';
import userApi from '../../data/userApi';

export const handleLoginError = createAsyncThunk(
  '',
);

export const kakaoSignIn = createAsyncThunk(
  'user/kakaoSignIn',
  async ({ code, navigate }) => {
    const isLogin = await userApi.kakaoLogin({ code, navigate });
    return isLogin;
  },
);
