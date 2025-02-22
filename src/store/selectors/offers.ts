import type { RootState } from '../../types/store';

import { createSelector } from '@reduxjs/toolkit';

const selectOffersState = (state: RootState) => state.offers;

export const selectCity = createSelector(
  [selectOffersState],
  (offers) => offers.city,
);

export const selectActiveId = createSelector(
  [selectOffersState],
  (offers) => offers.activeId,
);

export const selectOffers = createSelector(
  [selectOffersState],
  (offers) => offers.offers
);

export const selectOffersStatus = createSelector(
  [selectOffersState],
  (offers) => offers.status,
);

export const selectCityOffers = createSelector(
  [selectOffers, selectCity],
  (allOffers, city) => allOffers.filter((offer) => offer.city.name === city),
);

export const offersSelector = {
  city: selectCity,
  offers: selectOffers,
  activeId: selectActiveId,
  cityOffers: selectCityOffers,
  status: selectOffersStatus,
};
