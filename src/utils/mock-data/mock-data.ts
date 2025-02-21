import { Action, ThunkDispatch } from '@reduxjs/toolkit';
import type { FullOffer, ServerOffer } from '../../types/offer';
import type { Review } from '../../types/review';
import type { User } from '../../types/user';
import { createApi } from '../../services/api';
import { store } from '../../store';
import { CityName } from '../../types/city';

export const mockOffer: ServerOffer = {
  city: {
    location: {
      latitude: 50.23323,
      longitude: 20.323,
      zoom: 13,
    },
    name: 'Amsterdam',
  },
  id: '03323',
  isFavorite: false,
  isPremium: true,
  location: {
    latitude: 50.211,
    longitude: 20.232,
    zoom: 13,
  },
  previewImage: 'https://htmalacademy/',
  price: 222,
  rating: 3.4,
  title: 'Test title',
  type: 'test',
};

export const mockOfferFav: ServerOffer = {
  city: {
    location: {
      latitude: 50.23323,
      longitude: 20.323,
      zoom: 13,
    },
    name: 'Amsterdam',
  },
  id: '03323',
  isFavorite: true,
  isPremium: true,
  location: {
    latitude: 50.211,
    longitude: 20.232,
    zoom: 13,
  },
  previewImage: 'https://htmalacademy/',
  price: 222,
  rating: 3.4,
  title: 'Test title',
  type: 'test',
};

export const mockFullOffer: FullOffer = {
  city: {
    location: {
      latitude: 50.23323,
      longitude: 20.323,
      zoom: 13,
    },
    name: 'Amsterdam',
  },
  id: '03323',
  isFavorite: false,
  isPremium: true,
  location: {
    latitude: 50.211,
    longitude: 20.232,
    zoom: 13,
  },
  previewImage: 'https://htmalacademy/',
  price: 222,
  rating: 3.4,
  title: 'Test title',
  type: 'test',
  bedrooms: 3,
  description: 'test',
  goods: ['test goods', 'test goods'],
  host: {
    avatarUrl: 'https://htmalacademy/',
    isPro: true,
    name: 'John Applesead',
  },
  images: ['test images', 'test images'],
  maxAdults: 1,
};

export const mockNearbyOffer: ServerOffer = {
  city: {
    location: {
      latitude: 55.222,
      longitude: 21.3223,
      zoom: 13,
    },
    name: 'Paris',
  },
  id: '0333',
  isFavorite: false,
  isPremium: false,
  location: {
    latitude: 51.211,
    longitude: 21.232,
    zoom: 13,
  },
  previewImage: 'https://htmalacademy/',
  price: 220,
  rating: 4.4,
  title: 'Test title',
  type: 'test',
};

export const mockReview: Review = {
  id: '022',
  date: 'test date',
  user: {
    avatarUrl: 'https://htmalacademy/',
    isPro: true,
    name: 'Test name',
  },
  comment: 'Test comment',
  rating: 4,
};

export const mockUser: User = {
  avatarUrl: 'https://htmalacademy/',
  email: 'test@test.com',
  isPro: false,
  name: 'Test name',
  token: 'test',
};

export type State = ReturnType<typeof store.getState>;

export type AppThunkDispatch = ThunkDispatch<
  State,
  ReturnType<typeof createApi>,
  Action
>;

export const extractActionsTypes = (actions: Action<string>[]) =>
  actions.map(({ type }) => type);

export const makeFakeOffer = (cityName: CityName): ServerOffer => ({
  id: '1',
  title: 'Test Offer',
  type: 'apartment',
  price: 100,
  city: {
    name: cityName,
    location: {
      latitude: 48.85661,
      longitude: 2.351499,
      zoom: 13,
    },
  },
  location: {
    latitude: 48.85661,
    longitude: 2.351499,
    zoom: 13,
  },
  isFavorite: true,
  isPremium: false,
  previewImage: 'img/test.jpg',
  rating: 4.5,
});

export const fakeFavorites: ServerOffer[] = [
  makeFakeOffer('Paris'),
  makeFakeOffer('Paris'),
  makeFakeOffer('Cologne'),
  makeFakeOffer('Cologne'),
  makeFakeOffer('Amsterdam'),
  makeFakeOffer('Dusseldorf'),
];
