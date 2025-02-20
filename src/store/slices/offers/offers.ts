import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import type { CityName } from '../../../types/city';
import type { FullOffer, ServerOffer } from '../../../types/offer';

import { CITIES, RequestStatus } from '../../../utils/data';
import { fetchAllOffers, fetchNearBy, fetchOffer } from '../../thunks/offers/offers';

type OffersSlice = {
  city: CityName;
  activeId: FullOffer['id'] | undefined;
  offers: ServerOffer[];
  status: RequestStatus;
};

const initialState: OffersSlice = {
  city: CITIES[0].name,
  activeId: undefined,
  offers: [],
  status: RequestStatus.Idle,
};

export const offersSlice = createSlice({
  extraReducers: (builder) =>
    builder
      .addCase(fetchAllOffers.pending, (state) => {
        state.status = RequestStatus.Loading;
      })
      .addCase(fetchAllOffers.fulfilled, (state, action) => {
        state.status = RequestStatus.Success;
        state.offers = action.payload;
      })
      .addCase(fetchAllOffers.rejected, (state) => {
        state.status = RequestStatus.Failed;
      }),
  initialState,
  name: 'offers',
  reducers: {
    setCity: (state, action: PayloadAction<CityName>) => {
      state.city = action.payload;
    },
    setActiveId: (
      state,
      action: PayloadAction<FullOffer['id'] | undefined>,
    ) => {
      state.activeId = action.payload;
    },
  },
});

export const offersActions = {
  ...offersSlice.actions,
  fetchAllOffers,
  fetchOffer,
  fetchNearBy,
};
