import { createAppAsyncThunk } from '../../../hooks/store';

import type { ServerOffer } from '../../../types/offer';

import { Endpoint, FavoriteStatus } from '../../../utils/data/data';

export const fetchFavorites = createAppAsyncThunk<ServerOffer[], undefined>(
  'favorite/fetchAll',
  async (_arg, { extra: api }) => {
    const response = await api.get<ServerOffer[]>(Endpoint.Favorite);
    return response.data;
  },
);

type ChangeProps = {
  offerID: string;
  status: FavoriteStatus;
};

type ChangeResponse = {
  offer: ServerOffer;
  status: FavoriteStatus;
};

export const changeFavorite = createAppAsyncThunk<ChangeResponse, ChangeProps>(
  'favorite/change',
  async ({ offerID, status }, { extra: api }) => {
    const response = await api.post<ServerOffer>(
      `${Endpoint.Favorite}/${offerID}/${status}`,
    );
    return { offer: response.data, status };
  },
);
