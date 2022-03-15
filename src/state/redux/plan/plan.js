import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { changeDate } from '../../../shared/utils';
import PlanApi from '../../data/planApi';

const planApi = new PlanApi();
const RES_SUCCESS = 'success';
const RES_FAIL = 'fail';

const initialState = {
  myPresent: [],
  myPast: [],
  myDeleted: [],
  myplanDetail: {},
};

export const createTriplan = createAsyncThunk(
  'plan/createTriplan',
  async ({ planInfo, navigate }) => {
    const response = await planApi.createTriplan({ planInfo, navigate });
    // then에서 navigate('계획 페이지로 이동')
    // navigate('/plan/my_triplan', { replace: true });
    console.log(response);
  },
);

export const getMyTriplanList = createAsyncThunk(
  'plan/getMyTriplanList',
  async () => {
    const response = planApi.getMyTriplanList();
    return response
      .then((res) => {
        console.log(res);
        return res.data;
      })
      .catch((err) => {
        console.log(err);
        console.log(err.response);
      });
  },
);

export const deleteMyTriplan = createAsyncThunk(
  'plan/deleteMyTriplan',
  async (planId) => {
    const response = planApi.deleteTriplan(planId);
    return response
      .then((res) => {
        console.log(res);
        return { result: res.data.success, planId };
      })
      .catch((err) => {
        console.log(err);
      });
  },
);

export const restoreMyTriplan = createAsyncThunk(
  'plan/restoreMyTriplan',
  async (planId) => {
    const response = planApi.restoreTriplan(planId);
    return response
      .then((res) => {
        console.log(res);
        return { result: res.data.success, planId };
      })
      .catch((err) => console.log(err));
  },
);

export const planSlice = createSlice({
  name: 'plan',
  initialState,
  reducers: {},
  extraReducers: {
    // [createTriplan.fulfilled]: (state, action) => {

    // },
    [getMyTriplanList.fulfilled]: (state, action) => {
      if (action.payload.resutl === RES_SUCCESS) {
        const nowDate = new Date().toISOString();
        const myPresent = [];
        const myPast = [];
        const myDeleted = [];
        const changeDateFormat = (plan) => {
          plan.travel_start = changeDate(plan.travel_start);
          plan.travel_end = changeDate(plan.travel_end);
        };
        action.payload.data.forEach((plan) => {
          if (plan.del_fl === 'false') {
            changeDateFormat(plan);
            myDeleted.push(plan);
          } else if (plan.travel_end < nowDate) {
            changeDateFormat(plan);
            myPast.push(plan);
          } else {
            changeDateFormat(plan);
            myPresent.push(plan);
          }
        });

        state.myPresent = myPresent;
        state.myPast = myPast;
        state.myDeleted = myDeleted;
      }
    },
    [deleteMyTriplan.fulfilled]: (state, action) => {
      let deleted;
      let updated;
      if (action.payload.result === RES_SUCCESS) {
        updated = state.myPresent.filter((plan) => {
          if (plan.plan_id === action.payload.planId) {
            plan.del_fl = false;
            deleted = plan;
          }
          return plan.plan_id !== action.payload.planId;
        });
        state.myPresent = updated;
        state.myDeleted.push(deleted);
      }
    },
    [restoreMyTriplan.fulfilled]: (state, action) => {
      let restored;
      let updated;
      if (action.payload.result === RES_SUCCESS) {
        updated = state.myDeleted.filter((plan) => {
          if (plan.plan_id === action.payload.planId) {
            plan.del_fl = true;
            restored = plan;
          }
          return plan.plan_id !== action.payload.planId;
        });
        state.myDeleted = updated;
        state.myPresent.push(restored);
      }
    },
  },
});

// export const {} = planSlice.actions;

export default planSlice.reducer;
