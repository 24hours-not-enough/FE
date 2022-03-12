import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLogin: false,
  isLoading: false,
  isPopup: false,
};

export const statusSlice = createSlice({
  name: 'status',
  initialState,
  reducers: {
    setIsLogin: (state, action) => {
      state.isLogin = action.payload;
    },
    setTokenToSession: (state, action) => {
      sessionStorage.setItem('token', action.payload.access_token);
    },
  },
});

export const { setIsLogin, setTokenToSession } = statusSlice.actions;

export default statusSlice.reducer;
