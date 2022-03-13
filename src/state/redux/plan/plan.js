import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import PlanApi from '../../data/planApi';

const planApi = new PlanApi();

const initialState = {
  plan: {},
};

export const createTriplan = createAsyncThunk('plan/createTriplan', async (planInfo) => {
  await planApi.createTriplan(planInfo);
});

export const userSlice = createSlice({
  name: 'plan',
  initialState,
  reducers: {},
  extraReducers: {},
});

// export const {} = userSlice.actions;

export default userSlice.reducer;
