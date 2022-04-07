import { createSelector } from '@reduxjs/toolkit';

const _myFeed = createSelector(
  (state) =>
    state.feed.data.myFeed,
  (v) => v,
);

const _myLikes = createSelector(
  (state) =>
    state.feed.data.myLikes,
  (v) => v,
);

const _myFeedId = createSelector(
  (state) =>
    state.feed.feedId,
  (v) => v,
);

export { _myFeed, _myLikes, _myFeedId };
