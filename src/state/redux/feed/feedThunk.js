/* eslint-disable import/prefer-default-export */
import { createAsyncThunk } from '@reduxjs/toolkit';

export const addFeedDetail = createAsyncThunk(
  'feed/addFeedDetail',
  async () => {
    console.log('aaa');
  },
);
