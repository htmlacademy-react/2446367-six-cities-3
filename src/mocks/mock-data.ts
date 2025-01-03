import { AuthorizationStatus } from '../utils/data';
import { mockOffers } from './mock-offers';

// определение количества предложений аренды
export const Setting = {
  OffersCount: mockOffers.length,
  FavoritesCount: mockOffers.filter((i) => i.isFavorite).length,
} as const;

// переключение состояния авторизации
export const userAuthorization = AuthorizationStatus.Auth;
