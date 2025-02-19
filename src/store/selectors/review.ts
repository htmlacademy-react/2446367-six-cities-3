import { createSelector } from '@reduxjs/toolkit';

import type { RootState } from '../../types/store';

import { compareAsc } from 'date-fns';

const selectReviewState = (state: RootState) => state.reviews;

export const selectReviews = createSelector([selectReviewState], (reviews) => {
  const sortedReviews = [...reviews.items];

  sortedReviews.sort((a, b) => compareAsc(new Date(b.date), new Date(a.date)));

  return sortedReviews;
});

export const selectReviewsStatus = createSelector(
  [selectReviewState],
  (reviews) => reviews.status,
);

export const reviewsSelector = {
  items: selectReviews,
  status: selectReviewsStatus,
};
