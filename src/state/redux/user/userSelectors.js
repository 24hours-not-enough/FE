import { createSelector } from '@reduxjs/toolkit';

const _username = createSelector((state) => state.user.username, (v) => v);
const _profileImg = createSelector((state) => state.user.profileImg, (v) => v);

export { _username, _profileImg };
