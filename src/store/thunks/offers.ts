import type { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { ServerOffer } from '../../types/offer';
import { Endpoint } from '../../utils/data';

export const fetchAllOffers = createAsyncThunk<
  ServerOffer[],
  void,
  { extra: AxiosInstance }
>('fetchOffers/all', async (_arg, { extra: api }) => {
  const response = await api.get<ServerOffer[]>(Endpoint.Offers);
  return response.data;
});
