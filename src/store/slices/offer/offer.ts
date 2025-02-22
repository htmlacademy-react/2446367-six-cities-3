import { createSlice } from '@reduxjs/toolkit';

import type { FullOffer, ServerOffer } from '../../../types/offer';

import { FavoriteStatus, RequestStatus } from '../../../utils/data/data';
import { fetchNearBy, fetchOffer } from '../../thunks/offers/offers';
import { changeFavorite } from '../../thunks/favorites/favorites';

type OfferSlice = {
  info: FullOffer | null;
  nearby: ServerOffer[];
  status: RequestStatus;
};

const initialState: OfferSlice = {
  info: null,
  nearby: [],
  status: RequestStatus.Idle,
};

export const offerSlice = createSlice({
  extraReducers: (builder) => {
    builder
      .addCase(fetchOffer.fulfilled, (state, action) => {
        state.info = action.payload;
        state.status = RequestStatus.Success;
      })
      .addCase(fetchOffer.rejected, (state) => {
        state.status = RequestStatus.Failed;
      })
      .addCase(fetchOffer.pending, (state) => {
        state.status = RequestStatus.Loading;
      })
      .addCase(fetchNearBy.fulfilled, (state, action) => {
        state.nearby = action.payload;
      })
      .addCase(changeFavorite.fulfilled, (state, action) => {
        if (state.info && state.info.id === action.payload.offer.id) {
          switch (action.payload.status) {
            case FavoriteStatus.Added:
              state.info.isFavorite = true;
              break;
            case FavoriteStatus.Removed:
              state.info.isFavorite = false;
              break;
          }
        }

        const changedNearByIndex = state.nearby.findIndex(
          (offer) => offer.id === action.payload.offer.id,
        );
        if (changedNearByIndex !== -1 && state.nearby[changedNearByIndex]) {
          switch (action.payload.status) {
            case FavoriteStatus.Added:
              state.nearby[changedNearByIndex].isFavorite = true;
              break;
            case FavoriteStatus.Removed:
              state.nearby[changedNearByIndex].isFavorite = false;
              break;
          }
        }
      });
  },
  initialState,
  name: 'offer',
  reducers: {
    clear(state) {
      state.info = null;
      state.nearby = [];
      state.status = RequestStatus.Idle;
    },
  },
});

export const offerActions = { ...offerSlice.actions, fetchNearBy, fetchOffer };
