import { createSlice } from '@reduxjs/toolkit';
import { getPlace } from './placeThunk';

const initialState = {
  place: [],
};

const placeSlice = createSlice({
  name: 'place',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPlace.fulfilled, (state, { payload }) => {
        state.place = payload.response;
      });
    // .addCase(addFeedComment.fulfilled, (state, { payload }) => {
    // });
  },
});

export default placeSlice.reducer;
