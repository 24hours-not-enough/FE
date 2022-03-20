import { createSlice } from '@reduxjs/toolkit';
import { feed } from '../../data/mock';

const initialState = feed;

const feedSlice = createSlice({
  name: 'feed',
  initialState,
  reducers: {},
  extraReducers: {},
});

export default feedSlice.reducer;
