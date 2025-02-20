import thunk from 'redux-thunk';
import MockAdapter from 'axios-mock-adapter';

import type { State } from '../../../utils/mock-data';
import type { Action } from '@reduxjs/toolkit';
import type { FullOffer, ServerOffer } from '../../../types/offer';

import { describe } from 'vitest';
import { createApi } from '../../../services/api';
import { configureMockStore } from '@jedmao/redux-mock-store';
import {
  AppThunkDispatch,
  extractActionsTypes,
  mockFullOffer,
  mockNearbyOffer,
  mockOffer,
} from '../../../utils/mock-data';
import { Endpoint } from '../../../utils/data';
import { offersActions } from '../../slices/offers/offers';
import { fetchAllOffers, fetchNearBy, fetchOffer } from '../offers/offers';

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

  it('should fetch all offers with "fetchAllOffers.fulfilled"', async () => {
    const mockOffers: ServerOffer[] = [mockOffer, mockOffer];

    mockAxiosAdapter.onGet(Endpoint.Offers).reply(200, mockOffers);

    await store.dispatch(offersActions.fetchAllOffers());

    const emittedActions = store.getActions();
    const extractedActionsTypes = extractActionsTypes(emittedActions);
    const fetchAllOffersActionFulfilled = emittedActions.at(1) as ReturnType<typeof fetchAllOffers.fulfilled>;
    expect(extractedActionsTypes).toEqual([
      fetchAllOffers.pending.type,
      fetchAllOffers.fulfilled.type,
    ]);
    expect(fetchAllOffersActionFulfilled.payload).toEqual(mockOffers);
  });

  it('should fetch all offers with "fetchAllOffers.rejected"', async () => {
    mockAxiosAdapter.onGet(Endpoint.Offers).reply(400);

    await store.dispatch(offersActions.fetchAllOffers());

    const actions = extractActionsTypes(store.getActions());
    expect(actions).toEqual([
      fetchAllOffers.pending.type,
      fetchAllOffers.rejected.type,
    ]);
  });

  it('should fetch offer with "fetchOffer.fulfilled"', async () => {
    const offerID = '1';
    const filledMockOffer: FullOffer = mockFullOffer;

    mockAxiosAdapter
      .onGet(`${Endpoint.Offers}/${offerID}`)
      .reply(200, filledMockOffer);

    await store.dispatch(offersActions.fetchOffer(offerID));

    const emittedActions = store.getActions();
    const extractedActionsTypes = extractActionsTypes(emittedActions);
    const fetchOfferActionFulfilled = emittedActions.at(1) as ReturnType<typeof fetchOffer.fulfilled>;
    expect(extractedActionsTypes).toEqual([
      fetchOffer.pending.type,
      fetchOffer.fulfilled.type,
    ]);
    expect(fetchOfferActionFulfilled.payload).toEqual(filledMockOffer);
  });

  it('should fetch offer with "fetchOffer.rejected"', async () => {
    const offerID = '1';

    mockAxiosAdapter.onGet(`${Endpoint.Offers}/${offerID}`).reply(400);

    await store.dispatch(offersActions.fetchOffer(offerID));

    const actions = extractActionsTypes(store.getActions());
    expect(actions).toEqual([
      fetchOffer.pending.type,
      fetchOffer.rejected.type,
    ]);
  });

  it('should fetch nearby offers with "fetchNearBy.fulfilled"', async () => {
    const offerID = '1';
    const nearbyMockOffers: ServerOffer[] = [mockNearbyOffer, mockNearbyOffer];

    mockAxiosAdapter
      .onGet(`${Endpoint.Offers}/${offerID}/nearby`)
      .reply(200, nearbyMockOffers);

    await store.dispatch(offersActions.fetchNearBy(offerID));

    const emittedActions = store.getActions();
    const extractedActionsTypes = extractActionsTypes(emittedActions);
    const fetchNearbyActionFulfilled = emittedActions.at(1) as ReturnType<typeof fetchNearBy.fulfilled>;
    expect(extractedActionsTypes).toEqual([
      fetchNearBy.pending.type,
      fetchNearBy.fulfilled.type,
    ]);
    expect(fetchNearbyActionFulfilled.payload).toEqual(nearbyMockOffers);
  });

  it('should fetch nearby offers with "fetchNearBy.rejected"', async () => {
    const offerID = '1';

    mockAxiosAdapter.onGet(`${Endpoint.Offers}/${offerID}/nearby`).reply(400);

    await store.dispatch(offersActions.fetchNearBy(offerID));

    const actions = extractActionsTypes(store.getActions());
    expect(actions).toEqual([
      fetchNearBy.pending.type,
      fetchNearBy.rejected.type,
    ]);
  });
});
