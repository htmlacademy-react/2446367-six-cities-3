import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import type { CityName } from '../../../types/city';
import type { FullOffer, ServerOffer } from '../../../types/offer';

import {
  CITIES,
  FavoriteStatus,
  RequestStatus,
} from '../../../utils/data/data';
import {
  fetchAllOffers,
  fetchNearBy,
  fetchOffer,
} from '../../thunks/offers/offers';
import { changeFavorite } from '../../thunks/favorites/favorites';

type OffersSlice = {
  city: CityName;
  activeId: FullOffer['id'] | undefined;
  offers: ServerOffer[];
  status: RequestStatus;
  changeFavoriteStatus: RequestStatus;
};

const initialState: OffersSlice = {
  city: CITIES[0].name,
  activeId: undefined,
  offers: [],
  status: RequestStatus.Idle,
  changeFavoriteStatus: RequestStatus.Idle,
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
      })
      .addCase(changeFavorite.pending, (state) => {
        state.changeFavoriteStatus = RequestStatus.Loading;
      })
      .addCase(changeFavorite.fulfilled, (state, action) => {
        const changedFavoriteIndex = state.offers.findIndex(
          (offer) => offer.id === action.payload.offer.id,
        );
        switch (action.payload.status) {
          case FavoriteStatus.Added:
            state.offers[changedFavoriteIndex].isFavorite = true;
            break;
          case FavoriteStatus.Removed:
            state.offers[changedFavoriteIndex].isFavorite = false;
            break;
        }
      })
      .addCase(changeFavorite.rejected, (state) => {
        state.changeFavoriteStatus = RequestStatus.Failed;
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
