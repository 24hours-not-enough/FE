/* eslint-disable import/no-extraneous-dependencies */
import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import userReducer from './redux/user/user';
import placeReducer from './redux/place/place';
import feedReducer from './redux/feed/feed';
import planReducer from './redux/plan/plan';

const store = configureStore({
  reducer: {
    user: userReducer,
    place: placeReducer,
    feed: feedReducer,
    plan: planReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(logger),
});

export default store;
