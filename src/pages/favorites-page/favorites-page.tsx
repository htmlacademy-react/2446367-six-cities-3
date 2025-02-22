import { useAppSelector } from '../../hooks/store';

import EmptyFavoritesSection from './components/empty-favorites-section';
import FilledFavoritesSection from './components/filled-favorites-section';

import { selectFavorites } from '../../store/selectors/favorites';

export default function FavoritesPage() {
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
