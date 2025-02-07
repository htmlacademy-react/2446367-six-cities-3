import { Offers } from '../mocks/mock-types/offers';
import { CITIES, CityName } from '../utils/data';
import { mockOffers } from '../mocks/mock-offers';
import { createAction, createReducer } from '@reduxjs/toolkit';

type OffersState = {
  city: CityName;
  mockOffers: Offers;
};

const initialState: OffersState = {
  city: CITIES[0].name,
  mockOffers,
};

export const setCity = createAction<CityName>('offers/setCity');

export const reducer = createReducer(initialState, (builder) => {
  builder.addCase(setCity, (state, action) => {
    state.city = action.payload;
  });
});
