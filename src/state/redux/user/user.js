import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import UserApi from '../../data/userApi';

const userApi = new UserApi();

const initialState = {
  userInfo: {
    profileImg: 'aa',
    nickname: 'aa',
  },
};

export const kakaoSignIn = createAsyncThunk('user/kakaoSignIn', async (userInfo) => {
  await userApi.kakaoSignIn(userInfo);
});

export const checkDuplication = createAsyncThunk('user/checkDuplication', async (userInfo) => {
  await userApi.checkDuplication(userInfo);
});

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: {
    [kakaoSignIn.pending]: (state, action) => {
      // state = state;
    },
    [kakaoSignIn.fulfilled]: (state, action) => {
      // state = state;
    },
    [kakaoSignIn.rejected]: (state, action) => {
      // state = state;
    },
  },
});

// export const {} = userSlice.actions;

export default userSlice.reducer;
