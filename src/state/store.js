/* eslint-disable import/no-extraneous-dependencies */
import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import userReducer from './redux/user/user';
import statusReducer from './redux/status/status';

const store = configureStore({
  reducer: {
    user: userReducer,
    status: statusReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(logger),
});

export default store;
