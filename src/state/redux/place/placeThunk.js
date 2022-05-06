import { createAsyncThunk } from '@reduxjs/toolkit';
import PlaceApi from '../../data/placeApi';
import { getUser } from '../user/userThunk';

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

export const addBookmark = createAsyncThunk(
  'place/addBookmark',
  async (placeId, { dispatch }) => {
    const response = await placeApi.addBookmarkAxios(placeId);
    if (response.result === 'success') {
      alert('북마크가 등록되었습니다');
      dispatch(getUser());
    }
    return { response };
  },
);

export const addPlace = createAsyncThunk(
  'place/addPlace',
  async ({ placeData }, { dispatch }) => {
    const response = await placeApi.addPlaceAxios({ placeData });
    if (response.result === 'success') {
      dispatch(addBookmark(response.data));
    }
  },
);
