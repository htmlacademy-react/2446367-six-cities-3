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

// массив значений рейтинга
export const rating = [
  { value: 5, label: 'perfect' },
  { value: 4, label: 'good' },
  { value: 3, label: 'not-bad' },
  { value: 2, label: 'badly' },
  { value: 1, label: 'terribly' },
];

// массив наименований городов
export const CITIES = [
  {
    id: 'paris',
    location: {
      latitude: 48.85661,
      longitude: 2.351499,
      zoom: 13,
    },
    name: 'Paris',
  },
  {
    id: 'cologne',
    location: { latitude: 50.938361, longitude: 6.959974, zoom: 13 },
    name: 'Cologne',
  },
  {
    id: 'brussels',
    location: { latitude: 50.846557, longitude: 4.351697, zoom: 13 },
    name: 'Brussels',
  },
  {
    id: 'amsterdam',
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8,
    },
    name: 'Amsterdam',
  },
  {
    id: 'hamburg',
    location: { latitude: 53.550341, longitude: 10.000654, zoom: 13 },
    name: 'Hamburg',
  },
  {
    id: 'dusseldorf',
    location: { latitude: 51.225402, longitude: 6.776314, zoom: 13 },
    name: 'Dusseldorf',
  },
] as const;

export type CityName = (typeof CITIES)[number]['name'];
