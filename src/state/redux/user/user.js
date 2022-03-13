import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import UserApi from '../../data/userApi';
import { setIsLogin, setTokenToSession } from '../status/status';

const userApi = new UserApi();
const RES_SUCCESS = 'success';
// const RES_FAIL = 'fail';

const initialState = {
  user: {
    username: '',
    profileImg: '',
  },
};

export const kakaoLogin = createAsyncThunk('user/kakaoSignIn', async ({ code, navigate }, { dispatch }) => {
  const response = await userApi.kakaoLogin({ code, navigate });
  if (!response) return; // response가 없을 경우 : error

  // const { result, isfirst, tokens, user } = response;
  const { result, isfirst, tokens } = response;
  if (result === RES_SUCCESS) {
    if (isfirst) {
      navigate('/login/profile', { state: tokens, replace: true });
    } else {
      dispatch(setTokenToSession(tokens));
      dispatch(setIsLogin(true));
      navigate('/', { replace: true });
      // return user
    }
  }

  return { isfirst, user: { username: 'sunny', profileImg: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fcommons.wikimedia.org%2Fwiki%2FFile%3AProfileimg.png&psig=AOvVaw0Gg33GLv9A6EtkwA8m7FF6&ust=1647243309763000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCOjO2evJwvYCFQAAAAAdAAAAABAD' } };
});

export const googleLogin = createAsyncThunk('user/googleSignIn', async ({ code, navigate }, { dispatch }) => {
  const response = await userApi.googleLogin({ code, navigate });
  if (!response) return; // response가 없을 경우 : error

  // const { result, isfirst, tokens, user } = response;
  const { result, isfirst, tokens } = response;
  if (result === RES_SUCCESS) {
    if (isfirst) {
      navigate('/login/profile', { state: tokens, replace: true });
    } else {
      dispatch(setTokenToSession(tokens));
      dispatch(setIsLogin(true));
      navigate('/', { replace: true });
      // return user
    }
  }

  return { isfirst, user: { username: 'sunny', profileImg: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fcommons.wikimedia.org%2Fwiki%2FFile%3AProfileimg.png&psig=AOvVaw0Gg33GLv9A6EtkwA8m7FF6&ust=1647243309763000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCOjO2evJwvYCFQAAAAAdAAAAABAD' } };
});

export const pushUserInfo = createAsyncThunk('user/pushUserInfo', async ({ tokens, userInfo, navigate }, { dispatch }) => {
  const response = await userApi.pushUserInfo({ tokens, userInfo, navigate });
  if (!response) return;

  const { result, user } = response;
  if (result === RES_SUCCESS) {
    dispatch(setTokenToSession(tokens));
    dispatch(setIsLogin(true));
    navigate('/', { replace: true });
    return user;
  }
  return { user: { username: 'sunny', profileImg: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fcommons.wikimedia.org%2Fwiki%2FFile%3AProfileimg.png&psig=AOvVaw0Gg33GLv9A6EtkwA8m7FF6&ust=1647243309763000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCOjO2evJwvYCFQAAAAAdAAAAABAD' } };
});

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {

  },
  extraReducers: {
    [kakaoLogin.fulfilled]: (state, action) => {
      if (!action.payload.isfirst) {
        state.user.username = action.payload.user.username;
        state.user.profileImg = action.payload.user.profileImg;
      }
    },
    [googleLogin.fulfilled]: (state, action) => {
      if (!action.payload.isfirst) {
        state.user.username = action.payload.user.username;
        state.user.profileImg = action.payload.user.profileImg;
      }
    },
    [pushUserInfo.fulfilled]: (state, action) => {
      state.user = action.payload.user;
    },
  },
});

// export const {  } = userSlice.actions;

export default userSlice.reducer;
