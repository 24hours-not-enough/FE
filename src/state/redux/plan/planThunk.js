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

export const deleteDaysAxios = createAsyncThunk(
  'plan/deleteDaysAxios',
  async ({ planId, calendarId, planDetails }) => {
    const response = await planApi.deleteDays({ planId, calendarId });
    return {
      response, planId, calendarId, planDetails,
    };
  },
);

export const linkByInviteURL = createAsyncThunk(
  'plan/linkByInviteURL',
  async ({ roomId, navigate }, { dispatch }) => {
    await planApi.linkByInviteURL({ roomId, navigate });
    dispatch(getPlans);
  },
);

export const gotOutFromPlanAxios = createAsyncThunk(
  'plan/gotOutFromPlanAxios',
  async ({ planId, navigate, isInDetail }, { dispatch }) => {
    const response = await planApi.goOutFromPlanAxios({ planId, navigate, isInDetail });
    if (response.result === 'success') {
      dispatch(getPlans);
    } else {
      alert('다시 시도해주세요');
    }
    return response;
  },
);
