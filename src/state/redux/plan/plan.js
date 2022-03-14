import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import PlanApi from '../../data/planApi';

const planApi = new PlanApi();

const initialState = {
  myplans: [
    {
      plan_id: 1,
      title: '드디어 간다 미국 우아악',
      travel_destination: '미국',
      travel_start: '시작날짜',
      travel_end: '종료날짜',
      del_tc: 'true',
      memberList: [
        { profileImg: 'url' },
        { profileImg: 'url' },
      ],
    },
    {
      plan_id: 2,
      title: '드디어 간다 미국 우아악',
      travel_destination: '미국',
      travel_start: '시작날짜',
      travel_end: '종료날짜',
      del_tc: 'true',
      memberList: [
        { profileImg: 'url' },
        { profileImg: 'url' },
      ],
    },
    {
      plan_id: 1,
      title: '드디어 간다 미국 우아악',
      travel_destination: '미국',
      travel_start: '시작날짜',
      travel_end: '종료날짜',
      del_tc: 'true',
      memberList: [
        { profileImg: 'url' },
        { profileImg: 'url' },
      ],
    },
    {
      plan_id: 3,
      title: '드디어 간다 미국 우아악',
      travel_destination: '미국',
      travel_start: '시작날짜',
      travel_end: '종료날짜',
      del_tc: 'true',
      memberList: [
        { profileImg: 'url' },
        { profileImg: 'url' },
      ],
    },
  ],
  myplanDetail: {
    plan_id: 4,
    title: '드디어 간다 미국 우아악',
    travel_destination: '미국',
    travel_start: '시작날짜',
    travel_end: '종료날짜',
    del_tc: 'true',
    memberList: [
      { profileImg: 'url' },
      { profileImg: 'url' },
    ],
  },
};

export const createTriplan = createAsyncThunk(
  'plan/createTriplan',
  async ({ planInfo, navigate }) => {
    const response = await planApi.createTriplan({ planInfo, navigate });
    // then에서 navigate('계획 페이지로 이동')
    // navigate('/plan/my_triplan', { replace: true });
  },
);

export const planSlice = createSlice({
  name: 'plan',
  initialState,
  reducers: {},
  extraReducers: {
    [createTriplan.fulfilled]: (state, action) => {

    },
  },
});

// export const {} = planSlice.actions;

export default planSlice.reducer;
