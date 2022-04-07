import { createAsyncThunk } from '@reduxjs/toolkit';
import PlaceApi from '../../data/placeApi';

const placeApi = new PlaceApi();

export const getPlace = createAsyncThunk(
  'place/getPlace',
  async (coordinates) => {
    const response = await placeApi.getPlaceAxios(coordinates);
    return { response };
  },
);

export const addFeedComment = createAsyncThunk(
  'place/addFeedComment',
  async (feedId) => {
    const response = await placeApi.addFeedCommentAxios(feedId);
    return { response };
  },
);
