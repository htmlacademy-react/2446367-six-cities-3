import { describe } from 'vitest';
import { userSlice } from './user';
import { AuthorizationStatus, RequestStatus } from '../../utils/data';
import { checkAuth, logout } from '../thunks/user';
import { mockUser } from '../../utils/mock-data';

describe('userSlice', () => {
  it('should return initial state', () => {
    const state = userSlice.reducer(undefined, { type: 'unknown' });
    expect(state).toEqual({
      info: null,
      requestStatus: RequestStatus.Idle,
      status: AuthorizationStatus.Unknown,
    });
  });

  it('should handle checkAuth.fulfilled', () => {
    const action = {
      type: checkAuth.fulfilled.type,
      payload: mockUser,
    };
    const state = userSlice.reducer(undefined, action);
    expect(state).toEqual({
      info: mockUser,
      requestStatus: RequestStatus.Success,
      status: AuthorizationStatus.Auth,
    });
  });

  it('should handle logout.fulfilled', () => {
    const initialState = {
      info: mockUser,
      requestStatus: RequestStatus.Success,
      status: AuthorizationStatus.Auth,
    };
    const action = {
      type: logout.fulfilled.type,
    };
    const state = userSlice.reducer(initialState, action);
    expect(state).toEqual({
      info: null,
      requestStatus: RequestStatus.Idle,
      status: AuthorizationStatus.NoAuth,
    });
  });
});
