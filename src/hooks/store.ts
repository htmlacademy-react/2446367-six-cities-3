/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMemo } from 'react';
import { useDispatch, useSelector, useStore } from 'react-redux';

import {
  ActionCreatorsMapObject,
  AsyncThunk,
  bindActionCreators,
  createAsyncThunk,
} from '@reduxjs/toolkit';

import type { TypedUseSelectorHook } from 'react-redux';
import type { AppDispatch, RootState } from '../types/store';
import type { AxiosInstance } from 'axios';

import { store } from '../store';

type BoundActions<Actions extends ActionCreatorsMapObject> = {
  [key in keyof Actions]: Actions[key] extends AsyncThunk<any, any, any>
    ? BoundAsyncThunk<Actions[key]>
    : Actions[key];
};

type BoundAsyncThunk<Thunk extends AsyncThunk<any, any, any>> = (
  ...args: Parameters<Thunk>
) => ReturnType<ReturnType<Thunk>>;

export const useAppDispatch = useDispatch<AppDispatch>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppStore: () => typeof store = useStore;

export const useActionCreators = <Actions extends ActionCreatorsMapObject>(
  actions: Actions,
): BoundActions<Actions> => {
  const dispatch = useAppDispatch();

  return useMemo(
    () => bindActionCreators(actions, dispatch),
    [actions, dispatch],
  );
};

export const createAppAsyncThunk = createAsyncThunk.withTypes<{
  extra: AxiosInstance;
}>();
