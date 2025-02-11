import { PayloadAction, createSelector, createSlice } from '@reduxjs/toolkit';

import { Offer, Offers } from '../../mocks/mock-types/offers';
import { mockOffers } from '../../mocks/mock-offers';
import { CITIES, CityName } from '../../utils/data';
import { RootState } from '../../types/store';

type OffersState = {
  city: CityName;
  activeId: Offer['id'] | undefined;
  mockOffers: Offers;
};

const initialState: OffersState = {
  city: CITIES[0].name,
  activeId: undefined,
  mockOffers,
};

export const offersSlice = createSlice({
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
export const selectOffers = (state: RootState) => state.offers.mockOffers;

export const selectCityOffers = createSelector(
  [selectOffers, selectCity],
  (allOffers, city) => allOffers.filter((offer) => offer.city.name === city),
);

export const offersSelectors = {
  city: selectCity,
  offers: selectOffers,
  activeId: selectActiveId,
  cityOffers: selectCityOffers,
};

export const offersActions = offersSlice.actions;
