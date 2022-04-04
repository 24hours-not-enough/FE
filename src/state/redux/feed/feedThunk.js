/* eslint-disable import/prefer-default-export */
import { createAsyncThunk } from '@reduxjs/toolkit';
import instance, { imgApi } from '../../data/axios';

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
    // const { data } = await instance.post('/api/feed', postData);
    // console.log(data);
    return { feedInfo, feedTitle };
  },
);

export function getImagesUrl({ images }) {
  const formData = new FormData();
  Object.values(images).map((item) => formData.append('file', item));
  return imgApi.post('/api/feed/image', formData);
}
