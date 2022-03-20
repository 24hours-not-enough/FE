import { createSlice } from '@reduxjs/toolkit';
import { plan } from '../../data/mock';

const initialState = plan;

const planSlice = createSlice({
  name: 'plan',
  initialState,
  reducers: {},
  extraReducers: {},
});

export default planSlice.reducer;
