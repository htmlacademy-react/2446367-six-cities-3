import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { offersSlice } from './slices/offers';
import { offerSlice } from './slices/offer';
import { createApi } from '../services/api';

const reducer = combineReducers({
  [offersSlice.name]: offersSlice.reducer,
  [offerSlice.name]: offerSlice.reducer,
});

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: { extraArgument: createApi() } }),
});
