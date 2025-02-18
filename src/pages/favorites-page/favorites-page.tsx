import { useAppSelector } from '../../hooks/store';

import { EmptyFavoritesSection } from './components/empty-favorites-section';
import { FilledFavoritesSection } from './components/filled-favorites-section';

import { favoritesSelector } from '../../store/slices/favorites';

function BaseFavoritesPage() {
  const favorites = useAppSelector(favoritesSelector.favorites);
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

export const FavoritesPage = BaseFavoritesPage;
