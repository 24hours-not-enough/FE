import { createSelector } from '@reduxjs/toolkit';

const _plan = createSelector((state) => state.plan, (v) => v);

export default _plan;
