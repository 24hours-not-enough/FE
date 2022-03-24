import { createSlice } from '@reduxjs/toolkit';
import { createPlan, getPlans, updatePlan } from './planThunk';

const initialState = {
  plan: [],
};

const planSlice = createSlice({
  name: 'plan',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPlans.fulfilled, (state, { payload }) => {
        const { response } = payload;
        state.plan = response.data;
      })
      .addCase(createPlan.fulfilled, (state, { payload }) => {
      })
      .addCase(updatePlan.fulfilled, (state, { payload }) => {
      });
  },
});

export default planSlice.reducer;
