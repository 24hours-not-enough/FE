import { createSelector } from '@reduxjs/toolkit';

const user = createSelector(
  (state) => state.user,
  (v) => v,
);

export default user;
