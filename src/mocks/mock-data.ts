import { AuthorizationStatus } from '../data';

// определение количества предложений аренды
export const Setting = {
  OffersCount: 5,
  FavoritesCount: 3,
} as const;

// переключение состояния авторизации
export const userAuthorization = AuthorizationStatus.Auth;

// перечисление для преобразования звезд рейтинга
export enum WidthRating {
  '20%' = 1,
  '40%',
  '60%',
  '80%',
  '100%',
}
