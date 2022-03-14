import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { changeDate } from '../../../shared/utils';
import PlanApi from '../../data/planApi';

const planApi = new PlanApi();

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
  },
);

export const getMyTriplanList = createAsyncThunk(
  'plan/getMyTriplanList',
  async () => {
    const response = planApi.getMyTriplanList();
    return response
      .then((res) => {
        console.log(res);
        return res.data.data;
      })
      .catch((err) => {
        console.log(err);
        console.log(err.response);
      });
  },
);

export const planSlice = createSlice({
  name: 'plan',
  initialState,
  reducers: {},
  extraReducers: {
    [createTriplan.fulfilled]: (state, action) => {

    },
    [getMyTriplanList.fulfilled]: (state, action) => {
      const nowDate = new Date().toISOString();
      const myPresent = [];
      const myPast = [];
      const myDeleted = [];
      const changeDateFormat = (plan) => {
        plan.travel_start = changeDate(plan.travel_start);
        plan.travel_end = changeDate(plan.travel_end);
      };
      action.payload.forEach((plan) => {
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
    },
  },
});

// export const {} = planSlice.actions;

export default planSlice.reducer;
