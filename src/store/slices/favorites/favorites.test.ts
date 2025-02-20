import { describe, expect, it } from 'vitest';

import { favoritesSlice } from './favorites';
import { FavoriteStatus, RequestStatus } from '../../../utils/data';
import { changeFavorite, fetchFavorites } from '../../thunks/favorites/favorites';
import { mockOffer } from '../../../utils/mock-data';

describe('favoritesSlice', () => {
  it('should return initial state', () => {
    const state = favoritesSlice.reducer(undefined, { type: 'unknown' });
    expect(state).toEqual({
      items: [],
      status: RequestStatus.Idle,
    });
  });

  it('should handle fetchFavorites.fulfilled', () => {
    const action = {
      type: fetchFavorites.fulfilled.type,
      payload: [mockOffer],
    };
    const state = favoritesSlice.reducer(undefined, action);
    expect(state).toEqual({
      items: [mockOffer],
      status: RequestStatus.Success,
    });
  });

  it('should handle fetchFavorites.rejected', () => {
    const action = {
      type: fetchFavorites.rejected.type,
    };
    const state = favoritesSlice.reducer(undefined, action);
    expect(state).toEqual({
      items: [],
      status: RequestStatus.Failed,
    });
  });

  it('should handle change fetchFavorites.fulfilled - added', () => {
    const initialState = {
      items: [],
      status: RequestStatus.Idle,
    };
    const action = {
      type: changeFavorite.fulfilled.type,
      payload: { status: FavoriteStatus.Added, offer: mockOffer },
    };
    const state = favoritesSlice.reducer(initialState, action);
    expect(state.items).toEqual([mockOffer]);
  });

  it('should handle change fetchFavorites.fulfilled - removed', () => {
    const initialState = {
      items: [mockOffer],
      status: RequestStatus.Idle,
    };
    const action = {
      type: changeFavorite.fulfilled.type,
      payload: { status: FavoriteStatus.Removed, offer: mockOffer },
    };
    const state = favoritesSlice.reducer(initialState, action);
    expect(state.items).toEqual([]);
  });
});
