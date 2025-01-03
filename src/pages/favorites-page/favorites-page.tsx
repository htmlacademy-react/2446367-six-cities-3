import EmptyFavoritesPage from '../../components/empty-favorites-page/empty-favorites-page';
import FilledFavoritesPage from '../../components/filled-favorites-page/filled-favorites-page';
import { createFavoritesPage } from './favorites-page-util';
import { Offers } from '../../mocks/mock-types/offers';

type FavoritesPageProps = {
  favoritesCount: number;
  mockOffers: Offers;
};

export default function FavoritesPage({
  favoritesCount,
  mockOffers,
}: FavoritesPageProps) {
  const { emptyFavorites, emptyFavoritesMainClassName } =
    createFavoritesPage(favoritesCount);
  return (
    <main
      className={`page__main page__main--favorites ${emptyFavoritesMainClassName}`}
    >
      <div className="page__favorites-container container">
        {emptyFavorites ? (
          <EmptyFavoritesPage />
        ) : (
          <FilledFavoritesPage mockOffers={mockOffers} />
        )}
      </div>
    </main>
  );
}
