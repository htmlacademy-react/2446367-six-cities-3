import { describe } from 'vitest';
import { offerSlice } from '././offer';
import { RequestStatus } from '../../../utils/data';
import { fetchNearBy, fetchOffer } from '../../thunks/offers/offers';
import { mockFullOffer, mockNearbyOffer } from '../../../utils/mock-data';

describe('offersSlice', () => {
  it('should return initial state', () => {
    const state = offerSlice.reducer(undefined, { type: 'unknown' });
    expect(state).toEqual({
      info: null,
      nearby: [],
      status: RequestStatus.Idle,
    });
  });

  it('should handle fetchOffer.fulfilled', () => {
    const action = {
      type: fetchOffer.fulfilled.type,
      payload: mockFullOffer,
    };
    const state = offerSlice.reducer(undefined, action);
    expect(state).toEqual({
      info: mockFullOffer,
      nearby: [],
      status: RequestStatus.Success,
    });
  });

  it('should handle fetchNearBy.fulfilled', () => {
    const initialState = {
      info: mockFullOffer,
      nearby: [],
      status: RequestStatus.Idle,
    };
    const action = {
      type: fetchNearBy.fulfilled.type,
      payload: [mockNearbyOffer],
    };
    const state = offerSlice.reducer(initialState, action);
    expect(state.nearby).toEqual([mockNearbyOffer]);
  });

  it('should handle clear', () => {
    const initialState = {
      info: mockFullOffer,
      nearby: [mockNearbyOffer],
      status: RequestStatus.Success,
    };
    const action = offerSlice.actions.clear();
    const state = offerSlice.reducer(initialState, action);
    expect(state).toEqual({
      info: null,
      nearby: [],
      status: RequestStatus.Idle,
    });
  });
});
