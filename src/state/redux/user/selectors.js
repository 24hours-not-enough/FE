import { createSelector } from 'redux-toolkit';

const data = createSelector(
  data,
  (state) => state.user,
  (v) => v,
);

export default { data };
