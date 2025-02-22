import { CityName } from '../../../types/city';
import { FavoriteStatus, RequestStatus } from '../../../utils/data/data';
import { mockOffer } from '../../../utils/mock-data/mock-data';
import { changeFavorite } from '../../thunks/favorites/favorites';
import { fetchAllOffers } from '../../thunks/offers/offers';
import { offersSlice } from '././offers';

describe('offersSlice', () => {
  const initialState = {
    city: 'Paris' as CityName,
    activeId: undefined,
    offers: [],
    status: RequestStatus.Idle,
  };

  it('should return initial state', () => {
    const state = offersSlice.reducer(undefined, { type: 'unknown' });
    expect(state).toEqual(initialState);
  });

  it('should handle fetchAllOffers.fulfilled', () => {
    const action = {
      type: fetchAllOffers.fulfilled.type,
      payload: [mockOffer],
    };
    const state = offersSlice.reducer(undefined, action);
    expect(state).toEqual({
      ...initialState,
      offers: [mockOffer],
      status: RequestStatus.Success,
    });
  });

  it('should handle fetchAllOffers.rejected', () => {
    const action = { type: fetchAllOffers.rejected.type };
    const state = offersSlice.reducer(initialState, action);
    expect(state).toEqual({
      ...initialState,
      status: RequestStatus.Failed,
    });
  });

  it('should handle changeFavorite.fulfilled - added', () => {
    const initialStateWithOffer = {
      ...initialState,
      offers: [{ ...mockOffer, isFavorite: false }],
    };
    const action = {
      type: changeFavorite.fulfilled.type,
      payload: { offer: mockOffer, status: FavoriteStatus.Added },
    };
    const state = offersSlice.reducer(initialStateWithOffer, action);
    expect(state).toEqual({
      ...initialStateWithOffer,
      offers: [{ ...mockOffer, isFavorite: true }],
    });
  });

  it('should handle changeFavorite.fulfilled - removed', () => {
    const initialStateWithOffer = {
      ...initialState,
      offers: [{ ...mockOffer, isFavorite: true }],
    };
    const action = {
      type: changeFavorite.fulfilled.type,
      payload: { offer: mockOffer, status: FavoriteStatus.Removed },
    };
    const state = offersSlice.reducer(initialStateWithOffer, action);
    expect(state).toEqual({
      ...initialStateWithOffer,
      offers: [{ ...mockOffer, isFavorite: false }],
    });
  });

  it('should handle setCity', () => {
    const action = offersSlice.actions.setCity('Amsterdam');
    const state = offersSlice.reducer(initialState, action);
    expect(state).toEqual({
      ...initialState,
      city: 'Amsterdam',
    });
  });

  it('should handle activeId', () => {
    const action = offersSlice.actions.setActiveId('1');
    const state = offersSlice.reducer(initialState, action);
    expect(state).toEqual({
      ...initialState,
      activeId: '1',
    });
  });
});
