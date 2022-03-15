/* eslint-disable import/no-extraneous-dependencies */
import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import userReducer from './redux/user/user';
import statusReducer from './redux/status/status';
import planReducer from './redux/plan/plan';

const store = configureStore({
  reducer: {
    user: userReducer,
    status: statusReducer,
    plan: planReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(logger),
});

export default store;
