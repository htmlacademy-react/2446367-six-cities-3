import { describe } from 'vitest';
import { offerSlice } from '././offer';
import { FavoriteStatus, RequestStatus } from '../../../utils/data/data';
import { fetchNearBy, fetchOffer } from '../../thunks/offers/offers';
import {
  mockFullOffer,
  mockNearbyOffer,
} from '../../../utils/mock-data/mock-data';
import { changeFavorite } from '../../thunks/favorites/favorites';

describe('offersSlice', () => {
  const initialState = {
    info: null,
    nearby: [],
    status: RequestStatus.Idle,
  };

  it('should return initial state', () => {
    const state = offerSlice.reducer(undefined, { type: 'unknown' });
    expect(state).toEqual(initialState);
  });

  it('should handle fetchOffer.fulfilled', () => {
    const action = {
      type: fetchOffer.fulfilled.type,
      payload: mockFullOffer,
    };
    const state = offerSlice.reducer(initialState, action);
    expect(state).toEqual({
      ...initialState,
      info: mockFullOffer,
      status: RequestStatus.Success,
    });
  });

  it('should handle fetchOffer.rejected', () => {
    const action = { type: fetchOffer.rejected.type };
    const state = offerSlice.reducer(initialState, action);
    expect(state).toEqual({
      ...initialState,
      status: RequestStatus.Failed,
    });
  });

  it('should handle fetchOffer.pending', () => {
    const action = { type: fetchOffer.pending.type };
    const state = offerSlice.reducer(initialState, action);
    expect(state).toEqual({
      ...initialState,
      status: RequestStatus.Loading,
    });
  });

  it('should handle fetchNearBy.fulfilled', () => {
    const action = {
      type: fetchNearBy.fulfilled.type,
      payload: [mockNearbyOffer],
    };
    const state = offerSlice.reducer(initialState, action);
    expect(state).toEqual({
      ...initialState,
      nearby: [mockNearbyOffer],
    });
  });

  it('should handle changeFavorite.fulfilled - update info (added to favorites)', () => {
    const initialStateWithInfo = {
      ...initialState,
      info: { ...mockFullOffer, isFavorite: false },
    };
    const action = {
      type: changeFavorite.fulfilled.type,
      payload: { offer: mockFullOffer, status: FavoriteStatus.Added },
    };
    const state = offerSlice.reducer(initialStateWithInfo, action);
    expect(state).toEqual({
      ...initialStateWithInfo,
      info: { ...mockFullOffer, isFavorite: true },
    });
  });

  it('should handle changeFavorite.fulfilled - update info (removed from favorites)', () => {
    const initialStateWithInfo = {
      ...initialState,
      info: { ...mockFullOffer, isFavorite: true },
    };
    const action = {
      type: changeFavorite.fulfilled.type,
      payload: { offer: mockFullOffer, status: FavoriteStatus.Removed },
    };
    const state = offerSlice.reducer(initialStateWithInfo, action);
    expect(state).toEqual({
      ...initialStateWithInfo,
      info: { ...mockFullOffer, isFavorite: false },
    });
  });

  it('should handle changeFavorite.fulfilled - update nearby (added to favorites)', () => {
    const initialStateWithNearby = {
      ...initialState,
      nearby: [{ ...mockNearbyOffer, isFavorite: false }],
    };
    const action = {
      type: changeFavorite.fulfilled.type,
      payload: { offer: mockNearbyOffer, status: FavoriteStatus.Added },
    };
    const state = offerSlice.reducer(initialStateWithNearby, action);
    expect(state).toEqual({
      ...initialStateWithNearby,
      nearby: [{ ...mockNearbyOffer, isFavorite: true }],
    });
  });

  it('should handle changeFavorite.fulfilled - update nearby (removed from favorites)', () => {
    const initialStateWithNearby = {
      ...initialState,
      nearby: [{ ...mockNearbyOffer, isFavorite: true }],
    };
    const action = {
      type: changeFavorite.fulfilled.type,
      payload: { offer: mockNearbyOffer, status: FavoriteStatus.Removed },
    };
    const state = offerSlice.reducer(initialStateWithNearby, action);
    expect(state).toEqual({
      ...initialStateWithNearby,
      nearby: [{ ...mockNearbyOffer, isFavorite: false }],
    });
  });

  it('should handle clear', () => {
    const initialStateWithData = {
      info: mockFullOffer,
      nearby: [mockNearbyOffer],
      status: RequestStatus.Success,
    };
    const action = offerSlice.actions.clear();
    const state = offerSlice.reducer(initialStateWithData, action);
    expect(state).toEqual({
      info: null,
      nearby: [],
      status: RequestStatus.Idle,
    });
  });
});
