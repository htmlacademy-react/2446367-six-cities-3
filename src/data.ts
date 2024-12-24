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

// перечисление преобразования звезд рейтинга
export enum WidthRating {
  '20%' = 1,
  '40%',
  '60%',
  '80%',
  '100%',
}
