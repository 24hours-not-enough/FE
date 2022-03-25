import { createAsyncThunk } from '@reduxjs/toolkit';
import PlanApi from '../../data/planApi';

const planApi = new PlanApi();

export const getPlans = createAsyncThunk(
  'plan/getPlans',
  async () => {
    const response = await planApi.getPlans();
    console.log(response);
    return { response };
  },
);

export const createPlan = createAsyncThunk(
  'plan/createPlan',
  async ({ updatedPlan, navigate }, { dispatch }) => {
    await planApi.createPlan({ updatedPlan, navigate });
    dispatch(getPlans());
  },
);

export const updatePlan = createAsyncThunk(
  'plan/updatePlan',
  async ({ updatedPlan, navigate }, { dispatch }) => {
    await planApi.updatePlan({ updatedPlan, navigate });
    dispatch(getPlans());
  },
);
