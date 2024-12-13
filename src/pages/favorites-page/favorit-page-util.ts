export const createFavoritesPage = (favoritesCount: number) => {
  let emptyFavorites = false;
  let emptyFavoritesMainClassName = '';

  if (favoritesCount === 0) {
    emptyFavorites = true;
    emptyFavoritesMainClassName = ' page__main--favorites-empty';
  }

  return {
    emptyFavorites,
    emptyFavoritesMainClassName,
  };
};
