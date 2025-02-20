import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import type { User } from '../../../types/user';

import { AuthorizationStatus, RequestStatus } from '../../../utils/data';
import { checkAuth, login, logout } from '../../thunks/user/user';

type UserSlice = {
  info: User | null;
  requestStatus: RequestStatus;
  status: AuthorizationStatus;
};

const initialState: UserSlice = {
  info: null,
  requestStatus: RequestStatus.Idle,
  status: AuthorizationStatus.Unknown,
};

function processSuccess(state: UserSlice, action: PayloadAction<User>) {
  state.info = action.payload;
  state.status = AuthorizationStatus.Auth;
  state.requestStatus = RequestStatus.Success;
}

function processFailed(state: UserSlice) {
  state.requestStatus = RequestStatus.Failed;
  state.status = AuthorizationStatus.NoAuth;
}

function processLoading(state: UserSlice) {
  state.requestStatus = RequestStatus.Loading;
}

export const userSlice = createSlice({
  extraReducers: (builder) => {
    builder
      .addCase(checkAuth.fulfilled, processSuccess)
      .addCase(checkAuth.rejected, processFailed)
      .addCase(checkAuth.pending, processLoading)
      .addCase(login.fulfilled, processSuccess)
      .addCase(login.rejected, processFailed)
      .addCase(login.pending, processLoading)
      .addCase(logout.fulfilled, (state) => {
        state.info = null;
        state.requestStatus = RequestStatus.Idle;
        state.status = AuthorizationStatus.NoAuth;
      });
  },
  initialState,
  name: 'user',
  reducers: {},
});

export const userActions = { ...userSlice.actions, checkAuth, login, logout };
