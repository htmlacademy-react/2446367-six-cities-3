import { WidthRating } from './data';
import { Reviews } from '../mocks/mock-types/reviews';

export const capitalizeFirstLetter = (str: string) =>
  str[0].toUpperCase() + str.slice(1);

export const convertStarToWidth = (rate: number) => WidthRating[rate];

export const getUserName = (str: string) => str.split(' ')[0];

export const getOfferRating = (reviews: Reviews) => {
  let offerRating = 0;
  let starRating = '';

  reviews.map(({ rating }) => {
    offerRating += rating;
  });

  offerRating = Math.round(offerRating / reviews.length);
  starRating = convertStarToWidth(offerRating);

  return { offerRating, starRating };
};
