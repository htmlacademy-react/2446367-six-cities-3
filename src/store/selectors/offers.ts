import type { RootState } from '../../types/store';

export const selectOffers = (state: RootState) => state.mockOffers;
export const selectCity = (state: RootState) => state.city;
