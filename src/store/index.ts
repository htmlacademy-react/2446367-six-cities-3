import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { offersSlice } from './slices/offers';
import { offerSlice } from './slices/offer';
import { createApi } from '../services/api';
import { reviewSlice } from './slices/review';
import { userSlice } from './slices/user';
import { favoritesSlice } from './slices/favorites';

const reducer = combineReducers({
  [offersSlice.name]: offersSlice.reducer,
  [offerSlice.name]: offerSlice.reducer,
  [reviewSlice.name]: reviewSlice.reducer,
  [userSlice.name]: userSlice.reducer,
  [favoritesSlice.name]: favoritesSlice.reducer,
});

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: { extraArgument: createApi() } }),
});
