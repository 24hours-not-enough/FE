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

export const deletePlanAxios = createAsyncThunk(
  'plan/deletePlan',
  async (planId) => {
    await planApi.deletePlan(planId);
    return planId;
  },
);

export const restorePlanAxios = createAsyncThunk(
  'plan/restorePlanAxios',
  async (planId) => {
    await planApi.restorePlan(planId);
    return planId;
  },
);

export const deletePlanPermanentlyAxios = createAsyncThunk(
  'plan/deletePlanPermanentlyAxios',
  async (planId) => {
    await planApi.deletePlanPermanently(planId);
    return planId;
  },
);
