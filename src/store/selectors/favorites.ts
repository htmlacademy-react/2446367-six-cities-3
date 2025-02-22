import type { RootState } from '../../types/store';

import { createSelector } from '@reduxjs/toolkit';

const selectFavoriteState = (state: RootState) => state.favorites;

export const selectFavoriteStatus = createSelector(
  [selectFavoriteState],
  (favorites) => favorites.status,
);

export const selectFavorites = createSelector(
  [selectFavoriteState],
  (favorites) => favorites.items,
);

export const favoritesSelector = {
  status: selectFavoriteStatus,
  favorites: selectFavorites,
};
