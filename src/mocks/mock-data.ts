import { AuthorizationStatus } from '../data';

// определение количества предложений аренды
export const Setting = {
  OffersCount: 5,
  FavoritesCount: 3,
} as const;

// переключение состояния авторизации
export const userAuthorization = AuthorizationStatus.Auth;
