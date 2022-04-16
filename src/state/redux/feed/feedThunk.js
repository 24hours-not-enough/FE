/* eslint-disable import/prefer-default-export */
import { createAsyncThunk } from '@reduxjs/toolkit';
import instance from '../../data/axios';
import UserApi from '../../data/userApi';

const userApi = new UserApi();

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
    console.log(postData);
    const { data } = await instance.post('/api/feed', postData);
    return { postData };
  },
);

export const getFeedDetail = createAsyncThunk(
  'feed/getFeedDetail',
  async () => {
    const response = await instance.get('/api/feed');
    return response;
  },
);

export const likeFeed = createAsyncThunk(
  'feed/likeFeed',
  async ({ feedDetailLocId }) => {
    await userApi.likeFeedAxios({ feedDetailLocId });
  },
);

export const unlikeFeed = createAsyncThunk(
  'feed/likeFeed',
  async ({ feedDetailLocId }) => {
    await userApi.unlikeFeedAxios({ feedDetailLocId });
  },
);
