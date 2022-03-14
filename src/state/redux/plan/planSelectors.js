import { createSelector } from '@reduxjs/toolkit';

const _myplans = createSelector((state) => state.plan.myplans, (v) => v);
const _myplanDetail = createSelector((state) => state.plan.myplanDetail, (v) => v);

export { _myplans, _myplanDetail };
