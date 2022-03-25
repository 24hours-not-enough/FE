import { createAsyncThunk } from '@reduxjs/toolkit';
import UserApi from '../../data/userApi';

const userApi = new UserApi();

export const kakaoLogin = createAsyncThunk(
  'user/kakaoLogin',
  async ({ code, navigate }) => {
    const response = await userApi.kakaoLogin({ code, navigate });
    return { response };
  },
);

export const googleLogin = createAsyncThunk(
  'user/googleLogin',
  async ({ code, navigate }) => {
    const response = await userApi.googleLogin({ code, navigate });
    return { response };
  },
);

export const loginUserInfo = createAsyncThunk(
  'user/loginUserInfo',
  async ({ tokens, userInfo, navigate }) => {
    const response = await userApi.loginUserInfo({ tokens, userInfo, navigate });
    return { response };
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

export const getUser = createAsyncThunk(
  'user/getUser',
  async () => {
    const response = await userApi.getUser();
    console.log(response);
    return response;
  },
);

export const logout = createAsyncThunk(
  'user/logout',
  async ({ navigate }) => {
    navigate('/', { replace: true });
  },
);
