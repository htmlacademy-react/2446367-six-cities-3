// определение количества предложений аренды
export const Setting = {
  OffersCount: 10,
  FavoritesCount: 10,
} as const;

// перечисление маршрутов страниц приложения
export enum AppRoute {
  Root = '/',
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer/:id',
}
