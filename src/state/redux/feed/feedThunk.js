/* eslint-disable import/prefer-default-export */
import { createAsyncThunk } from '@reduxjs/toolkit';

export const addFeedDetail = createAsyncThunk(
  'feed/addFeedDetail',
  async ({ feedInfo, feedTitle }) => {
    console.log(feedInfo, feedTitle);
    return { feedInfo, feedTitle };
  },
);
