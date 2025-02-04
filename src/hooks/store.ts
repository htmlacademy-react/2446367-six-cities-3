import type { TypedUseSelectorHook } from 'react-redux';

import { useDispatch, useSelector, useStore } from 'react-redux';
import type { AppDispatch, RootState } from '../types/store';
import { store } from '../store';

export const useAppDispatch = useDispatch<AppDispatch>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppStore: () => typeof store = useStore;
