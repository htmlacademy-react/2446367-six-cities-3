import { createSlice } from '@reduxjs/toolkit';
import { FullOffer, ServerOffer } from '../../types/offer';
import { RequestStatus } from '../../utils/data';
import { fetchNearBy, fetchOffer } from '../thunks/offers';
import { RootState } from '../../types/store';

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

export const selectNearby = (state: RootState) => state.offer.nearby;
export const selectOffer = (state: RootState) => state.offer.info;
export const selectStatus = (state: RootState) => state.offer.status;

export const offerSelector = {
  nearby: selectNearby,
  offer: selectOffer,
  status: selectStatus,
};

export const offerActions = { ...offerSlice.actions, fetchNearBy, fetchOffer };
