import { useEffect } from 'react';
import { useActionCreators, useAppSelector } from '../../hooks/store';

import EmptyFavoritesSection from './components/empty-favorites-section';
import FilledFavoritesSection from './components/filled-favorites-section';

import { selectFavorites } from '../../store/selectors/favorites';
import { favoritesActions } from '../../store/slices/favorites/favorites';

function BaseFavoritesPage() {
  const { fetchFavorites } = useActionCreators(favoritesActions);

  const favorites = useAppSelector(selectFavorites);
  const favoritesLength = favorites.length;

  const isEmpty = favoritesLength === 0;

  useEffect(() => {
    fetchFavorites()
      .unwrap()
      .catch(() => {
      });
  }, [fetchFavorites]);

  return (
    <div className="page__favorites-container container">
      {isEmpty ? (
        <EmptyFavoritesSection />
      ) : (
        <FilledFavoritesSection favorites={favorites} />
      )}
    </div>
  );
}

const FavoritesPage = BaseFavoritesPage;

export default FavoritesPage;
