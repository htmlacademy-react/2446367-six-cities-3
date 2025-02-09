import { PayloadAction, createSelector, createSlice } from '@reduxjs/toolkit';

import { Offer, Offers } from '../../mocks/mock-types/offers';
import { mockOffers } from '../../mocks/mock-offers';
import { CITIES, CityName } from '../../utils/data';

type OffersState = {
  city: CityName;
  activeId?: Offer['id'];
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
  selectors: {
    city: (state: OffersState) => state.city,
    activeId: (state: OffersState) => state.activeId,
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
