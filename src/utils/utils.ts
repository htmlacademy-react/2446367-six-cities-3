import { WidthRating } from './data';

export const capitalizeFirstLetter = (str: string) => str[0].toUpperCase() + str.slice(1);

export const convertStarToWidth = (rate: number) => WidthRating[rate];
