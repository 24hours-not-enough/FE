import { createSlice } from '@reduxjs/toolkit';
import { feed } from '../../data/mock';

const initialState = feed;

const feedSlice = createSlice({
  neme: 'feed',
  initialState,
  reducers: {},
  extraReducers: {},
});

export default feedSlice.reducer;
