import { createSlice } from '@reduxjs/toolkit';
import { addFeedDetail, getFeedDetail } from './feedThunk';

const initialState = {
  myFeed: [],
  myLikes: [],
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
  extraReducers: (builder) => {
    builder
      .addCase(addFeedDetail.fulfilled, (state, { payload }) => ({
        ...state,
        myFeed: [...state.myFeed, payload.postData],
      }))
      .addCase(getFeedDetail.fulfilled, (state, { payload }) => ({
        ...state,
        myFeed: payload.myFeeds,
        myLikes: payload.myLikes,
      }));
  },
});

export const { setFeedId } = feedSlice.actions;

export default feedSlice.reducer;
