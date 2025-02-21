import { createSlice } from '@reduxjs/toolkit';

import type { Review } from '../../../types/review';

import { RequestStatus } from '../../../utils/data/data';
import { commentsThunks } from '../../thunks/comments/comments';

type ReviewSlice = {
  items: Review[];
  status: RequestStatus;
};

const initialState: ReviewSlice = {
  items: [],
  status: RequestStatus.Idle,
};

export const reviewSlice = createSlice({
  extraReducers: (builder) => {
    builder
      .addCase(commentsThunks.fetchComments.fulfilled, (state, action) => {
        state.items = action.payload;
        state.status = RequestStatus.Success;
      })
      .addCase(commentsThunks.fetchComments.rejected, (state) => {
        state.status = RequestStatus.Failed;
      })
      .addCase(commentsThunks.fetchComments.pending, (state) => {
        state.status = RequestStatus.Loading;
      })
      .addCase(commentsThunks.postComment.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(commentsThunks.postComment.rejected, (state) => {
        state.status = RequestStatus.Failed;
      })
      .addCase(commentsThunks.postComment.pending, (state) => {
        state.status = RequestStatus.Loading;
      });
  },
  initialState,
  name: 'reviews',
  reducers: {},
});

export const reviewsActions = {
  ...reviewSlice.actions,
  ...commentsThunks,
};
