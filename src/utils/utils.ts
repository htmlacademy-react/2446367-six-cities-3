import type { ServerOffer } from '../types/offer';

import { WidthRating } from './data';

export const capitalizeFirstLetter = (str: string) =>
  str[0].toUpperCase() + str.slice(1);

export const convertStarToWidth = (rate: number) => WidthRating[rate];

export const getUserName = (str: string) => str.split(' ')[0];

// валидация пароля
export const validatePassword = (password: string): boolean => {
  const hasLetter = /[a-zA-Z]/.test(password);
  const hasNumber = /\d/.test(password);

  return hasLetter && hasNumber;
};

// группировка избранных предложений по городам
export function favoritesByCity(
  favorites: ServerOffer[],
): Record<string, ServerOffer[]> {
  return favorites.reduce(
    (acc, offer) => {
      const city = offer.city.name;
      if (!acc[city]) {
        acc[city] = [];
      }
      acc[city].push(offer);
      return acc;
    },
    {} as Record<string, ServerOffer[]>,
  );
}

// расчет единственного/множественного числа
export function pluralize(count: number, word: string): string {
  return count === 1 ? `${count} ${word}` : `${count} ${word}s`;
}

// получение случайного элемента массива
export function randomIndex<T>(data: readonly T[]) {
  return Math.floor(Math.random() * data.length);
}
