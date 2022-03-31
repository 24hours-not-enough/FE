import { createSlice } from '@reduxjs/toolkit';
import {
  deletePlanAxios, deletePlanPermanentlyAxios, getPlans, restorePlanAxios, updatePlanDetailAxios,
} from './planThunk';

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
      // .addCase(createPlan.fulfilled, (state, { payload }) => {
      // })
      // .addCase(updatePlan.fulfilled, (state, { payload }) => {
      // })
      .addCase(deletePlanAxios.fulfilled, (state, { payload }) => {
        state.plan = state.plan.map((onePlan) => {
          if (onePlan.planId === payload) {
            return { ...onePlan, delTc: false };
          }
          return onePlan;
        });
      })
      .addCase(restorePlanAxios.fulfilled, (state, { payload }) => {
        state.plan = state.plan.map((onePlan) => {
          if (onePlan.planId === payload) {
            return { ...onePlan, delTc: true };
          }
          return onePlan;
        });
      })
      .addCase(deletePlanPermanentlyAxios.fulfilled, (state, { payload }) => {
        state.plan = state.plan.filter((onePlan) => onePlan.planId !== payload);
      })
      .addCase(updatePlanDetailAxios.fulfilled, (state, { payload }) => {

      });
  },
});

export default planSlice.reducer;
