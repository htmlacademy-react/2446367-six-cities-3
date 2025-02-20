import { useAppSelector } from '../../hooks/store';

import { selectFavorites } from '../../store/selectors/favorites';

import { EmptyFavoritesSection } from './components/empty-favorites-section';
import { FilledFavoritesSection } from './components/filled-favorites-section';

export function FavoritesPage() {
  const favorites = useAppSelector(selectFavorites);
  const favoritesLength = favorites.length;

  const isEmpty = favoritesLength === 0;

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
