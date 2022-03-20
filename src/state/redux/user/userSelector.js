import { createSelector } from '@reduxjs/toolkit';

const _userInfo = createSelector(
  (state) => state.userInfo,
  (v) => v,
);

const _notification = createSelector(
  (state) => state.user.notification,
  (v) => v,
);

const _bookmark = createSelector(
  (state) => state.user.bookmark,
  (v) => v,
);

export { _userInfo, _notification, _bookmark };
