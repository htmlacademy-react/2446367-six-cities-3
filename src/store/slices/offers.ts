import { PayloadAction, createSelector, createSlice } from '@reduxjs/toolkit';

import type { RootState } from '../../types/store';
import type { CityName } from '../../types/city';
import type { FullOffer, ServerOffer } from '../../types/offer';

import { CITIES, RequestStatus } from '../../utils/data';
import { fetchAllOffers } from '../thunks/offers';

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
    setActiveId: (state, action: PayloadAction<FullOffer['id'] | undefined>) => {
      state.activeId = action.payload;
    },
  },
});

const selectCity = (state: RootState) => state.offers.city;
const selectActiveId = (state: RootState) => state.offers.activeId;
const selectOffers = (state: RootState) => state.offers.offers;
const selectStatus = (state: RootState) => state.offers.status;

export const selectCityOffers = createSelector(
  [selectOffers, selectCity],
  (allOffers, city) => allOffers.filter((offer) => offer.city.name === city),
);

export const offersSelector = {
  city: selectCity,
  offers: selectOffers,
  activeId: selectActiveId,
  cityOffers: selectCityOffers,
  status: selectStatus,
};

export const offersActions = { ...offersSlice.actions, fetchAllOffers };
