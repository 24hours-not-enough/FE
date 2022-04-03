/* eslint-disable import/prefer-default-export */
import { createAsyncThunk } from '@reduxjs/toolkit';
import { imgApi } from '../../data/axios';

export const addFeedDetail = createAsyncThunk(
  'feed/addFeedDetail',
  async ({ feedInfo, feedTitle }) => {
    console.log(feedInfo, feedTitle);
    return { feedInfo, feedTitle };
  },
);

export function getImagesUrl({ images }) {
  return imgApi.post('/api/feed/image', images);
}
