import type { Review } from '../types/review';

import { WidthRating } from './data';

export const capitalizeFirstLetter = (str: string) =>
  str[0].toUpperCase() + str.slice(1);

export const convertStarToWidth = (rate: number) => WidthRating[rate];

export const getUserName = (str: string) => str.split(' ')[0];

export const getOfferRating = (reviews: Review[]) => {
  let offerRating = 0;
  let starRating = '';

  if (reviews.length !== 0) {
    reviews.map(({ rating }) => {
      offerRating += rating;
    });

    offerRating = Math.round(offerRating / reviews.length);
    starRating = convertStarToWidth(offerRating);
  }

  return { offerRating, starRating };
};

// валидация пароля
export const validatePassword = (password: string): boolean => {
  const hasLetter = /[a-zA-Z]/.test(password);
  const hasNumber = /\d/.test(password);

  return hasLetter && hasNumber;
};
