import { createAppAsyncThunk } from '../../../hooks/store';

import type { FullOffer, ServerOffer } from '../../../types/offer';

import { Endpoint } from '../../../utils/data';

export const fetchAllOffers = createAppAsyncThunk<ServerOffer[], void>(
  'fetchOffers/all',
  async (_arg, { extra: api }) => {
    const response = await api.get<ServerOffer[]>(Endpoint.Offers);
    return response.data;
  },
);

export const fetchOffer = createAppAsyncThunk<FullOffer, string>(
  'fetchOffers/one',
  async (offerID, { extra: api }) => {
    const response = await api.get<FullOffer>(`${Endpoint.Offers}/${offerID}`);
    return response.data;
  },
);

export const fetchNearBy = createAppAsyncThunk<ServerOffer[], string>(
  'fetchOffers/near',
  async (offerID, { extra: api }) => {
    const response = await api.get<ServerOffer[]>(
      `${Endpoint.Offers}/${offerID}/nearby`,
    );
    return response.data;
  },
);
