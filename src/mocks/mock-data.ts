import { AuthorizationStatus } from '../data';
import { mockOffers } from './mock-offers';

// определение количества предложений аренды
export const Setting = {
  OffersCount: mockOffers.length,
  FavoritesCount: 3,
} as const;

// переключение состояния авторизации
export const userAuthorization = AuthorizationStatus.Auth;
