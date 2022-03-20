import { createSlice } from '@reduxjs/toolkit';
import { place } from '../../data/mock';

const initialState = place;

const placeSlice = createSlice({
  name: 'place',
  initialState,
  reducers: {},
  extraReducers: {},
});

export default placeSlice.reducer;
