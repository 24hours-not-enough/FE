import { createSlice } from '@reduxjs/toolkit';
import {
  addDaysAxios,
  deletePlanAxios,
  deletePlanPermanentlyAxios,
  getPlans, restorePlanAxios,
  togglePlanDeleteState,
  updatePlanDetailAxios,
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
      .addCase(togglePlanDeleteState.fulfilled, (state, { payload }) => {
        state.plan = state.plan.map((onePlan) => {
          if (onePlan.planId === payload) {
            if (onePlan.delTc === true) {
              return { ...onePlan, delTc: false };
            }
            return { ...onePlan, delTc: true };
          }
          return onePlan;
        });
      })
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
        const { planId, planDetailData } = payload;
      })
      .addCase(addDaysAxios.fulfilled, (state, { payload }) => {
        if (payload.result === true) {
          const { planId, calendarId } = payload;
          state.plan = state.plan.map((onePlan) => {
            if (onePlan.planId === planId) {
              const added = { calendarId, days: `${onePlan.calendars.length + 1}일차`, calendarDetails: [] };
              console.log({ ...onePlan, calendars: [...onePlan.calendars, added] });
              return { ...onePlan, calendars: [...onePlan.calendars, added] };
            }
            return onePlan;
          });
        }
      });
  },
});

export default planSlice.reducer;
