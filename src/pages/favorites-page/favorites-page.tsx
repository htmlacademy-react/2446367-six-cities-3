import { useAppSelector } from '../../hooks/store';
import usePageLayout from '../../hooks/use-page-layout';

import EmptyFavoritesSection from './components/empty-favorites-section';
import FilledFavoritesSection from './components/filled-favorites-page';

import { favoritesSelector } from '../../store/slices/favorites';

export default function FavoritesPage() {
  const favorites = useAppSelector(favoritesSelector.favorites);
  const favoritesLength = favorites.length;

  const { emptyFavorites } = usePageLayout({
    favoritesLength,
  });

  return (
    <div className="page__favorites-container container">
      {emptyFavorites ? (
        <EmptyFavoritesSection />
      ) : (
        <FilledFavoritesSection favorites={favorites} />
      )}
    </div>
  );
}
