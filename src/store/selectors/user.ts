import type { RootState } from '../../types/store';

import { createSelector } from '@reduxjs/toolkit';

const selectUserState = (state: RootState) => state.user;

export const selectUser = createSelector(
  [selectUserState],
  (user) => user.info,
);

export const selectUserRequestStatus = createSelector(
  [selectUserState],
  (user) => user.requestStatus,
);

export const selectUserStatus = createSelector(
  [selectUserState],
  (user) => user.status,
);

export const userSelector = {
  info: selectUser,
  requestStatus: selectUserRequestStatus,
  status: selectUserStatus,
};
