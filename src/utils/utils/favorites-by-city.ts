import { ServerOffer } from '../../types/offer';

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
