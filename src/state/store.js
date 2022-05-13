/* eslint-disable import/no-extraneous-dependencies */
import { configureStore } from '@reduxjs/toolkit';
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
});

export default store;
