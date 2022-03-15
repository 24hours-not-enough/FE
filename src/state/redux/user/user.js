import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { setTokenToSession } from '../../../shared/utils';
import UserApi from '../../data/userApi';
import { setIsLogin } from '../status/status';

const userApi = new UserApi();
const RES_SUCCESS = 'success';
const RES_FAIL = 'fail';

const initialState = {
  user: {
    username: '',
    profileImg: '',
  },
};

export const kakaoLogin = createAsyncThunk(
  'user/kakaoLogin',
  async ({ code, navigate }, { dispatch }) => {
    const response = await userApi.kakaoLogin({ code })
      .then((res) => {
        console.log(res);
        return { result: res.data.result, res: res.data, navigate };
      })
      .catch((err) => {
        console.log(err);
        console.log(err.response);
        return { result: 'fail', navigate };
      });

    if (response.result === RES_SUCCESS) {
      const { isfirst, tokens } = response.res;
      if (isfirst) {
        navigate('/login/profile', { state: tokens.access_token, replace: true });
        return response;
      }
      dispatch(setIsLogin(true));
      setTokenToSession(tokens.access_token);
      navigate('/', { replace: true });
      return response;
    } if (response.result === RES_FAIL) {
      return response;
    }
  },
);

export const googleLogin = createAsyncThunk(
  'user/googleLogin',
  async ({ code, navigate }, { dispatch }) => {
    const response = await userApi.googleLogin({ code })
      .then((res) => {
        console.log(res);
        return { result: res.data.result, res: res.data, navigate };
      })
      .catch((err) => {
        console.log(err);
        console.log(err.response);
        return { result: 'fail', navigate };
      });

    if (response.result === RES_SUCCESS) {
      const { isfirst, tokens } = response.res;
      if (isfirst) {
        navigate('/login/profile', { state: tokens.access_token, replace: true });
        return response;
      }
      dispatch(setIsLogin(true));
      setTokenToSession(tokens.access_token);
      navigate('/', { replace: true });
      return response;
    } if (response.result === RES_FAIL) {
      return response;
    }
  },
);

export const pushUserInfo = createAsyncThunk(
  'user/pushUserInfo',
  async ({ token, userInfo, navigate }, { dispatch }) => {
    const response = await userApi.pushUserInfo({ token, userInfo, navigate })
      .then((res) => {
        console.log(res);
        return { result: res.data.result, res, navigate };
      })
      .catch((err) => {
        console.log(err);
        console.log(err.response);
        return { result: 'fail', navigate };
      });

    if (response.result === RES_SUCCESS) {
      dispatch(setIsLogin(true));
      setTokenToSession(token);
      navigate('/', { replace: true });
      return response;
    } if (response.result === RES_FAIL) {
      alert('에러가 발생했습니다. 로그인을 다시 시도해주세요');
      navigate('/login', { replace: true });
      return response;
    }
  },
);

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {

  },
  extraReducers: {
    [kakaoLogin.fulfilled]: (state, action) => {
      if (action.payload.result === RES_SUCCESS && !action.payload.res.isfirst) {
        state.user = { ...action.payload.res.userbasicinfo };
      }
    },
    [googleLogin.fulfilled]: (state, action) => {
      if (action.payload.result === RES_SUCCESS && !action.payload.res.isfirst) {
        state.user = { ...action.payload.res.userbasicinfo };
      }
    },
    [pushUserInfo.fulfilled]: (state, action) => {
      if (action.payload.result === RES_SUCCESS) {
        state.user = { ...action.payload.res.userbasicinfo };
      }
    },
  },
});

// export const {  } = userSlice.actions;

export default userSlice.reducer;
