import { createSlice } from '@reduxjs/toolkit';
import { feed } from '../../data/mock';
import { addFeedDetail } from './feedThunk';

const initialState = {
  data: feed,
  feedId: null,
};

const feedSlice = createSlice({
  name: 'feed',
  initialState,
  reducers: {
    setFeedId: (state, { payload }) => ({
      ...state,
      feedId: payload,
    }),
  },
  extraReducers: {},
});

export const { setFeedId } = feedSlice.actions;

export default feedSlice.reducer;
