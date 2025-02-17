import { createSlice } from '@reduxjs/toolkit';

import type { RootState } from '../../types/store';
import type { FullOffer, ServerOffer } from '../../types/offer';

import { RequestStatus } from '../../utils/data';
import { fetchNearBy, fetchOffer } from '../thunks/offers';

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
        state.nearby = action.payload.slice(0, 3);
      });
  },
  initialState,
  name: 'offer',
  reducers: {
    clear(state) {
      state.info = null;
      state.nearby = [];
    },
  },
});

const selectNearby = (state: RootState) => state.offer.nearby;
const selectOffer = (state: RootState) => state.offer.info;
const selectStatus = (state: RootState) => state.offer.status;

export const offerSelector = {
  nearby: selectNearby,
  offer: selectOffer,
  status: selectStatus,
};

export const offerActions = { ...offerSlice.actions, fetchNearBy, fetchOffer };
