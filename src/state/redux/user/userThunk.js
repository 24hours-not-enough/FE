import { createAsyncThunk } from '@reduxjs/toolkit';
import UserApi from '../../data/userApi';
import { imgApi } from '../../data/axios';
import { getPlans } from '../plan/planThunk';

const userApi = new UserApi();

export const getUser = createAsyncThunk(
  'user/getUser',
  async (_, { dispatch }) => {
    const response = await userApi.getUser();
    dispatch(getPlans());
    return response;
  },
);

export const kakaoLogin = createAsyncThunk(
  'user/kakaoLogin',
  async ({ code, navigate }, { dispatch }) => {
    const response = await userApi.kakaoLogin({ code, navigate });
    if (response && response.first === false) {
      dispatch(getUser());
      dispatch(getPlans());
    }
    return { response };
  },
);

export const googleLogin = createAsyncThunk(
  'user/googleLogin',
  async ({ code, navigate }, { dispatch }) => {
    const response = await userApi.googleLogin({ code, navigate });
    if (response && response.first === false) {
      dispatch(getUser());
    }
    return { response };
  },
);

export const loginUserInfo = createAsyncThunk(
  'user/loginUserInfo',
  async ({ tokens, userInfo, navigate }, { dispatch }) => {
    const response = await userApi.loginUserInfo({ tokens, userInfo, navigate });
    dispatch(getUser());
    return { response };
  },
);

export const changeUserName = createAsyncThunk(
  'user/changeUserName',
  async ({ userNameChange }) =>
    // const userName = await ...
    // api 요청하고 success오면 return해서 userName반영
    userNameChange
  ,
);

export const logout = createAsyncThunk(
  'user/logout',
  async ({ navigate }) => {
    await userApi.logoutAxios();
    navigate('/', { replace: true });
  },
);

export const withdrawal = createAsyncThunk(
  'user/withdrawal',
  async ({ navigate }, { dispatch }) => {
    dispatch(logout());
    await userApi.withdrawalAxios();
    navigate('/', { replace: true });
  },
);

export const changeUserProfile = createAsyncThunk(
  'user/changeProfile',
  async ({ userInfo }) => {
    const response = await imgApi.put('/api/mypage', userInfo);
    return response;
  },
);
