import { createSlice } from '@reduxjs/toolkit';

import type { FullOffer, ServerOffer } from '../../../types/offer';

import { FavoriteStatus, RequestStatus } from '../../../utils/data/data';
import { fetchNearBy, fetchOffer } from '../../thunks/offers/offers';
import { changeFavorite } from '../../thunks/favorites/favorites';

type OfferSlice = {
  info: FullOffer | null;
  nearby: ServerOffer[];
  status: RequestStatus;
  changeFavoriteStatus: RequestStatus;
};

const initialState: OfferSlice = {
  info: null,
  nearby: [],
  status: RequestStatus.Idle,
  changeFavoriteStatus: RequestStatus.Idle,
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
      .addCase(changeFavorite.pending, (state) => {
        state.changeFavoriteStatus = RequestStatus.Loading;
      })
      .addCase(changeFavorite.fulfilled, (state, action) => {
        if (state.info && state.info.id === action.payload.offer.id) {
          state.info.isFavorite =
            action.payload.status === FavoriteStatus.Added;
        }

        const changedNearByIndex = state.nearby.findIndex(
          (offer) => offer.id === action.payload.offer.id,
        );
        if (changedNearByIndex !== -1 && state.nearby[changedNearByIndex]) {
          state.nearby[changedNearByIndex].isFavorite =
            action.payload.status === FavoriteStatus.Added;
        }
      })
      .addCase(changeFavorite.rejected, (state) => {
        state.changeFavoriteStatus = RequestStatus.Failed;
      });
  },
  initialState,
  name: 'offer',
  reducers: {
    clear(state) {
      state.info = null;
      state.nearby = [];
      state.status = RequestStatus.Idle;
      state.changeFavoriteStatus = RequestStatus.Idle;
    },
  },
});

export const offerActions = { ...offerSlice.actions, fetchNearBy, fetchOffer };
