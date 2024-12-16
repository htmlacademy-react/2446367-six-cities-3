// определение количества предложений аренды
export const Setting = {
  OffersCount: 5,
  FavoritesCount: 3,
} as const;

// перечисление маршрутов страниц приложения
export enum AppRoute {
  Root = '/',
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer/:id',
}

// перечисление статуса авторизации
export enum AuthorizationStatus {
  Auth = 'Auth',
  NoAuth = 'NoAuth',
  Unknown = 'Unknown',
}

// переключение состояния авторизации
export const userAuthorization = AuthorizationStatus.Auth;
