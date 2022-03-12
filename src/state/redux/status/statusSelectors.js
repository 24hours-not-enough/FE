import { createSelector } from '@reduxjs/toolkit';

const _isLogin = createSelector((state) => state.status.isLogin, (v) => v);
const _isLoading = createSelector((state) => state.status.isLoading, (v) => v);
const _isPopup = createSelector((state) => state.status.isPopup, (v) => v);

export { _isLogin, _isLoading, _isPopup };
