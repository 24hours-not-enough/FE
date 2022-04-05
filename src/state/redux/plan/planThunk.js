import { createAsyncThunk } from '@reduxjs/toolkit';
import PlanApi from '../../data/planApi';

const planApi = new PlanApi();

export const getPlans = createAsyncThunk(
  'plan/getPlans',
  async () => {
    const response = await planApi.getPlans();
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
  async ({ planId, updatedPlan, navigate }, { dispatch }) => {
    await planApi.updatePlan({ planId, updatedPlan, navigate });
    dispatch(getPlans());
  },
);

export const deletePlanAxios = createAsyncThunk(
  'plan/deletePlan',
  async ({ planId, navigate, isInDetail }) => {
    await planApi.deletePlan({ planId, navigate, isInDetail });
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

export const togglePlanDeleteState = createAsyncThunk(
  'plan/togglePlanDeleteState',
  async ({ planId, navigate, isInDetail }) => {
    await planApi.togglePlanDeleteState({ planId, navigate, isInDetail });
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

export const updatePlanDetailAxios = createAsyncThunk(
  'plan/updatePlanDetailAxios',
  async ({ planId, planDetailData }, { dispatch }) => {
    await planApi.updatePlanDetail({ planId, planDetailData });
    dispatch(getPlans());
    return { planId, planDetailData };
  },
);

export const addDaysAxios = createAsyncThunk(
  'plan/addDaysAxios',
  async (planId) => {
    const response = await planApi.addDays(planId);
    return response;
  },
);
