import { fakeFavorites } from '../mock-data/mock-data';
import { favoritesByCity } from './favorites-by-city';

describe('Function: favoritesByCity', () => {
  it('should group favorites by city', () => {
    const result = favoritesByCity(fakeFavorites);

    expect(result).toEqual({
      Paris: [fakeFavorites[0], fakeFavorites[1]],
      Cologne: [fakeFavorites[2], fakeFavorites[3]],
      Amsterdam: [fakeFavorites[4]],
      Dusseldorf: [fakeFavorites[5]],
    });
  });

  it('should return empty object if favorites is empty', () => {
    const result = favoritesByCity([]);

    expect(result).toEqual({});
  });
});
