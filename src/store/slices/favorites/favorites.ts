import { createSlice } from '@reduxjs/toolkit';

import type { ServerOffer } from '../../../types/offer';

import { RequestStatus, FavoriteStatus } from '../../../utils/data/data';
import {
  changeFavorite,
  fetchFavorites,
} from '../../thunks/favorites/favorites';

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
        if (action.payload) {
          state.items = action.payload;
          state.status = RequestStatus.Success;
        } else {
          state.status = RequestStatus.Failed;
        }
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
            break;
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

export const favoritesActions = {
  ...favoritesSlice.actions,
  changeFavorite,
  fetchFavorites,
};
