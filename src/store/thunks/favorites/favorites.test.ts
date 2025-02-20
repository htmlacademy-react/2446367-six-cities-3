import thunk from 'redux-thunk';
import MockAdapter from 'axios-mock-adapter';

import type { State } from '../../../utils/mock-data';
import type { Action } from '@reduxjs/toolkit';
import type { ServerOffer } from '../../../types/offer';

import { describe } from 'vitest';
import { createApi } from '../../../services/api';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { AppThunkDispatch, mockOfferFav } from '../../../utils/mock-data';
import { Endpoint, FavoriteStatus } from '../../../utils/data';
import { favoritesActions } from '../../slices/favorites/favorites';
import { extractActionsTypes } from '../../../utils/mock-data';
import { fetchFavorites, changeFavorite } from './favorites';

describe('Offers async', () => {
  const axios = createApi();
  const mockAxiosAdapter = new MockAdapter(axios);
  const middleware = [thunk.withExtraArgument(axios)];
  const mockStoreCreator = configureMockStore<
    State,
    Action<string>,
    AppThunkDispatch
  >(middleware);
  let store: ReturnType<typeof mockStoreCreator>;

  beforeEach(() => {
    store = mockStoreCreator({});
  });

  it('should fetch favorites with "fetchFavorites.fulfilled"', async () => {
    const mockFavorites: ServerOffer[] = [mockOfferFav, mockOfferFav];

    mockAxiosAdapter.onGet(Endpoint.Favorite).reply(200, mockFavorites);

    await store.dispatch(favoritesActions.fetchFavorites());

    const emittedActions = store.getActions();
    const extractedActionsTypes = extractActionsTypes(emittedActions);
    const fetchFavoritesActionFulfilled = emittedActions.at(1) as ReturnType<
      typeof fetchFavorites.fulfilled
    >;
    expect(extractedActionsTypes).toEqual([
      fetchFavorites.pending.type,
      fetchFavorites.fulfilled.type,
    ]);
    expect(fetchFavoritesActionFulfilled.payload).toEqual(mockFavorites);
  });

  it('should fetch favorites with "fetchFavorites.rejected"', async () => {
    mockAxiosAdapter.onGet(Endpoint.Favorite).reply(400);

    await store.dispatch(favoritesActions.fetchFavorites());

    const actions = extractActionsTypes(store.getActions());
    expect(actions).toEqual([
      fetchFavorites.pending.type,
      fetchFavorites.rejected.type,
    ]);
  });

  it('should change favorite with "changeFavorite.fulfilled"', async () => {
    const offerID = '1';
    const status = FavoriteStatus.Added;
    const favoriteMockOffer: ServerOffer = mockOfferFav;

    mockAxiosAdapter
      .onPost(`${Endpoint.Favorite}/${offerID}/${status}`)
      .reply(200, favoriteMockOffer);

    await store.dispatch(favoritesActions.changeFavorite({ offerID, status }));

    const emittedActions = store.getActions();
    const extractedActionsTypes = extractActionsTypes(emittedActions);
    const changeFavoriteActionFulfilled = emittedActions.at(1) as ReturnType<
      typeof changeFavorite.fulfilled
    >;
    expect(extractedActionsTypes).toEqual([
      changeFavorite.pending.type,
      changeFavorite.fulfilled.type,
    ]);
    expect(changeFavoriteActionFulfilled.payload).toEqual({
      offer: favoriteMockOffer,
      status,
    });
  });

  it('should change favorite with "changeFavorite.rejected"', async () => {
    const offerID = '1';
    const status = FavoriteStatus.Added;

    mockAxiosAdapter
      .onPost(`${Endpoint.Favorite}/${offerID}/${status}`)
      .reply(400);

    await store.dispatch(favoritesActions.changeFavorite({ offerID, status }));

    const actions = extractActionsTypes(store.getActions());
    expect(actions).toEqual([
      changeFavorite.pending.type,
      changeFavorite.rejected.type,
    ]);
  });
});
