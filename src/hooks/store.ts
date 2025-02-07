import { useMemo } from 'react';
import { useDispatch, useSelector, useStore } from 'react-redux';

import { TypedUseSelectorHook } from 'react-redux';
import { ActionCreatorsMapObject, bindActionCreators } from '@reduxjs/toolkit';
import { AppDispatch, RootState } from '../types/store';
import { store } from '../store';

export const useAppDispatch = useDispatch<AppDispatch>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppStore: () => typeof store = useStore;

export const useActionCreators = <Actions extends ActionCreatorsMapObject>(actions: Actions) => {
  const dispatch = useAppDispatch();

  return useMemo(() => bindActionCreators(actions, dispatch), [actions, dispatch]);
};
