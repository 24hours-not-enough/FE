import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import PlanApi from '../../data/planApi';

const planApi = new PlanApi();

const initialState = {
  plan: {},
};

export const createTriplan = createAsyncThunk('plan/createTriplan', async ({ planInfo, navigate }) => {
  const response = await planApi.createTriplan({ planInfo, navigate });
  // navigate('계획 페이지로 이동')
});

export const userSlice = createSlice({
  name: 'plan',
  initialState,
  reducers: {},
  extraReducers: {
    [createTriplan.fulfilled]: (state, action) => {

    },
  },
});

// export const {} = userSlice.actions;

export default userSlice.reducer;
