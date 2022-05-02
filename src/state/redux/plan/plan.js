import { createSlice } from '@reduxjs/toolkit';
import {
  addDaysAxios,
  // deleteDaysAxios,
  deletePlanPermanentlyAxios,
  getPlans,
  togglePlanDeleteState,
  // updatePlanDetailAxios,
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
      .addCase(deletePlanPermanentlyAxios.fulfilled, (state, { payload }) => {
        state.plan = state.plan.filter((onePlan) => onePlan.planId !== payload);
      })
      .addCase(addDaysAxios.fulfilled, (state, { payload }) => {
        if (payload.result === true) {
          const { planId, calendarId } = payload;
          state.plan = state.plan.map((onePlan) => {
            if (onePlan.planId === planId) {
              const added = { calendarId, days: `${onePlan.calendars.length + 1}일차`, calendarDetails: [] };
              return { ...onePlan, calendars: [...onePlan.calendars, added] };
            }
            return onePlan;
          });
        }
      });
  },
});

export default planSlice.reducer;
