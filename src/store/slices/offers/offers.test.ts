import { RequestStatus } from '../../../utils/data';
import { mockOffer } from '../../../utils/mock-data';
import { fetchAllOffers } from '../../thunks/offers/offers';
import { offersSlice } from '././offers';

describe('offersSlice', () => {
  it('should return initial state', () => {
    const state = offersSlice.reducer(undefined, { type: 'unknown' });
    expect(state).toEqual({
      city: 'Paris',
      activeId: undefined,
      offers: [],
      status: RequestStatus.Idle,
    });
  });

  it('should handle fetchAllOffers.fulfilled', () => {
    const action = {
      type: fetchAllOffers.fulfilled.type,
      payload: [mockOffer],
    };
    const state = offersSlice.reducer(undefined, action);
    expect(state).toEqual({
      city: 'Paris',
      activeId: undefined,
      offers: [mockOffer],
      status: RequestStatus.Success,
    });
  });

  it('should handle setCity', () => {
    const action = offersSlice.actions.setCity('Amsterdam');
    const state = offersSlice.reducer(undefined, action);
    expect(state.city).toEqual('Amsterdam');
  });

  it('should handle activeId', () => {
    const action = offersSlice.actions.setActiveId('1');
    const state = offersSlice.reducer(undefined, action);
    expect(state.activeId).toEqual('1');
  });
});
