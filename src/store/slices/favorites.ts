import type { ServerOffer } from '../../types/offer';

import { createSlice } from '@reduxjs/toolkit';

import { RequestStatus, FavoriteStatus } from '../../utils/data';
import { changeFavorite, fetchFavorites } from '../thunks/favorites';
import { RootState } from '../../types/store';

type FavoritesSlice = {
  items: ServerOffer[];
  status: RequestStatus;
};

const initialState: FavoritesSlice = {
  items: [],
  status: RequestStatus.Idle,
};

export const favoritesSlice = createSlice({
  extraReducers: (builder) => {
    builder
      .addCase(fetchFavorites.fulfilled, (state, action) => {
        state.items = action.payload;
        state.status = RequestStatus.Success;
      })
      .addCase(fetchFavorites.rejected, (state) => {
        state.status = RequestStatus.Failed;
      })
      .addCase(fetchFavorites.pending, (state) => {
        state.status = RequestStatus.Loading;
      })
      .addCase(changeFavorite.fulfilled, (state, action) => {
        switch (action.payload.status) {
          case FavoriteStatus.Added:
            state.items.push(action.payload.offer);
            break;
          case FavoriteStatus.Removed:
            state.items = state.items.filter(
              ({ id }) => id !== action.payload.offer.id,
            );
        }
      })
      .addCase(changeFavorite.rejected, (state) => {
        state.status = RequestStatus.Failed;
      })
      .addCase(changeFavorite.pending, (state) => {
        state.status = RequestStatus.Loading;
      });
  },
  initialState,
  name: 'favorites',
  reducers: {},
});

const selectFavoriteStatus = (state: RootState) => state.favorites.status;
const selectFavorites = (state: RootState) => state.favorites.items;

export const favoritesSelector = {
  status: selectFavoriteStatus,
  items: selectFavorites,
};

export const favoritesActions = {
  ...favoritesSlice.actions,
  changeFavorite,
  fetchFavorites,
};
