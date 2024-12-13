// определение количества предложений аренды
export const Setting = {
  OffersCount: 10,
  FavoritesCount: 10,
} as const;

// перечисление страниц приложения
export const Page = {
  Main: 'main',
  Login: 'login',
  Favorites: 'favorites',
  Offer: 'offer',
};
