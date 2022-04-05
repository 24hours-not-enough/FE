/* eslint-disable import/prefer-default-export */
import { createAsyncThunk } from '@reduxjs/toolkit';
import instance from '../../data/axios';

export const addFeedDetail = createAsyncThunk(
  'feed/addFeedDetail',
  async ({
    feedInfo, feedTitle, travelStart, travelEnd,
  }) => {
    const postData = {
      title: feedTitle,
      travelStart,
      travelEnd,
      feedDetail: feedInfo,
    };
    const { data } = await instance.post('/api/feed', postData);
    console.log(data); // id값
    return { postData };
  },
);
