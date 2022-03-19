import { createSelector } from '@reduxjs/toolkit';

const _place = createSelector((state) => state.place, (v) => v);

export default _place;
