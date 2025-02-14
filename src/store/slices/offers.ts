import { PayloadAction, createSelector, createSlice } from '@reduxjs/toolkit';

import { Offer } from '../../mocks/mock-types/offers';
import { CITIES, RequestStatus } from '../../utils/data';
import { RootState } from '../../types/store';
import { fullOffer, ServerOffer } from '../../types/offer';
import { CityName } from '../../types/city';
import { fetchAllOffers } from '../thunks/offers';

type OffersState = {
  city: CityName;
  activeId: fullOffer['id'] | undefined;
  offers: ServerOffer[];
  status: RequestStatus;
};

const initialState: OffersState = {
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
    setActiveId: (state, action: PayloadAction<Offer['id'] | undefined>) => {
      state.activeId = action.payload;
    },
  },
});

export const selectCity = (state: RootState) => state.offers.city;
export const selectActiveId = (state: RootState) => state.offers.activeId;
export const selectOffers = (state: RootState) => state.offers.offers;
export const selectStatus = (state: RootState) => state.offers.status;

export const selectCityOffers = createSelector(
  [selectOffers, selectCity],
  (allOffers, city) => allOffers.filter((offer) => offer.city.name === city),
);

export const offersSelectors = {
  city: selectCity,
  offers: selectOffers,
  activeId: selectActiveId,
  cityOffers: selectCityOffers,
  status: selectStatus,
};

export const offersActions = offersSlice.actions;
