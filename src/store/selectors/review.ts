import { createSelector } from '@reduxjs/toolkit';

import type { RootState } from '../../types/store';

const selectReviewState = (state: RootState) => state.reviews;

export const selectReviews = createSelector(
  [selectReviewState],
  (reviews) => reviews.items,
);

export const selectReviewsStatus = createSelector(
  [selectReviewState],
  (reviews) => reviews.status,
);

export const reviewsSelector = {
  items: selectReviews,
  status: selectReviewsStatus,
};
