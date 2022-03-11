import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import UserApi from '../../data/userApi';

const userApi = new UserApi();

const initialState = {
  userInfo: {
    profileImg: '',
    username: '',
  },
};

export const kakaoLogin = createAsyncThunk('user/kakaoSignIn', async ({ code, navigate }) => {
  const isLogin = await userApi.kakaoLogin({ code, navigate });
  return isLogin;
});

export const googleLogin = createAsyncThunk('user/kakaoSignIn', async ({ code, navigate }) => {
  const isLogin = await userApi.googleLogin({ code, navigate });
  return isLogin;
});

export const pushUserInfo = createAsyncThunk('user/pushUserInfo', async ({ email, userInfo }) => {
  await userApi.pushUserInfo({ email, userInfo });
});

export const checkDuplication = createAsyncThunk('user/checkDuplication', async (userInfo) => {
  await userApi.checkDuplication(userInfo);
});

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: {
    [kakaoLogin.pending]: (state, action) => {
      // state = state;
    },
    [kakaoLogin.fulfilled]: (state, action) => {
      // state = state;
    },
    [kakaoLogin.rejected]: (state, action) => {
      // state = state;
    },
    [googleLogin.pending]: (state, action) => {
      // state = state;
    },
    [googleLogin.fulfilled]: (state, action) => {
      // state = state;
    },
    [googleLogin.rejected]: (state, action) => {
      // state = state;
    },
    [pushUserInfo.pending]: (state, action) => {
      // state = state;
    },
    [pushUserInfo.fulfilled]: (state, action) => {
      // state = state;
    },
    [pushUserInfo.rejected]: (state, action) => {
      // state = state;
    },
  },
});

// export const {} = userSlice.actions;

export default userSlice.reducer;
