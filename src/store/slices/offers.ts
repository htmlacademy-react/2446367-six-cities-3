import { PayloadAction, createSelector, createSlice } from '@reduxjs/toolkit';

import { Offers } from '../../mocks/mock-types/offers';
import { mockOffers } from '../../mocks/mock-offers';
import { CITIES, CityName } from '../../utils/data';

type OffersState = {
  city: CityName;
  mockOffers: Offers;
};

const initialState: OffersState = {
  city: CITIES[0].name,
  mockOffers,
};

export const offersSlice = createSlice({
  initialState,
  name: 'offers',
  reducers: {
    setCity: (state, action: PayloadAction<CityName>) => {
      state.city = action.payload;
    },
  },
  selectors: {
    city: (state: OffersState) => state.city,
    offers: (state: OffersState) => state.mockOffers,
  },
});

export const offersActions = offersSlice.actions;
export const offersSelectors = {
  ...offersSlice.selectors,
  cityOffers: createSelector(
    offersSlice.selectors.offers,
    offersSlice.selectors.city,
    (allOffers, city) => allOffers.filter((offer) => offer.city.name === city),
  ),
};
