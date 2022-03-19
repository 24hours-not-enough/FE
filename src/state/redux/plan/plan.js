import { createSlice } from '@reduxjs/toolkit';
import { plan } from '../../data/mock';

const initialState = plan;

const planSlice = createSlice({
  neme: 'plan',
  initialState,
  reducers: {},
  extraReducers: {},
});

export default planSlice.reducer;
