import EmptyFavoritesPage from './empty-favorites-page';
import NoEmptyFavoritesPage from './no-empty-favorites-page';
import { createFavoritesPage } from './favorit-page-util';

type FavoritesPageProps = {
  favoritesCount: number;
};

export default function FavoritesPage({ favoritesCount }: FavoritesPageProps) {
  const {
    emptyFavorites,
    emptyFavoritesMainClassName,
  } = createFavoritesPage(favoritesCount);
  return (
    <main className={`page__main page__main--favorites ${emptyFavoritesMainClassName}`}>
      <div className="page__favorites-container container">
        {emptyFavorites ? <EmptyFavoritesPage /> : <NoEmptyFavoritesPage />}
      </div>
    </main>
  );
}
