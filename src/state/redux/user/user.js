import { createSlice } from '@reduxjs/toolkit';
import { user } from '../../data/mock';

const initialState = user;

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: {},
});

export default userSlice.reducer;
