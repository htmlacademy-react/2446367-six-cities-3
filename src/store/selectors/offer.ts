import { createSelector } from '@reduxjs/toolkit';
import type { RootState } from '../../types/store';

const selectOfferState = (state: RootState) => state.offer;

export const selectNearby = createSelector(
  [selectOfferState],
  (offer) => offer.nearby,
);

export const selectOffer = createSelector(
  [selectOfferState],
  (offer) => offer.info,
);

export const selectOfferStatus = createSelector(
  [selectOfferState],
  (offer) => offer.status,
);

export const offerSelector = {
  nearby: selectNearby,
  offer: selectOffer,
  status: selectOfferStatus,
};
