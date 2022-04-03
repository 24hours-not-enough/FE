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
  },
});

export const { setIsLogin } = statusSlice.actions;

export default statusSlice.reducer;
