import { createSelector } from '@reduxjs/toolkit';

const _myPresent = createSelector((state) => state.plan.myPresent, (v) => v);
const _myPast = createSelector((state) => state.plan.myPast, (v) => v);
const _myDeleted = createSelector((state) => state.plan.myDeleted, (v) => v);
const _myplanDetail = createSelector((state) => state.plan.myplanDetail, (v) => v);

export {
  _myPresent, _myPast, _myDeleted, _myplanDetail,
};
