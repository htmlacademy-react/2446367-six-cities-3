import EmptyFavoritesPage from '../../components/empty-favorites-page/empty-favorites-page';
import FilledFavoritesPage from '../../components/filled-favorites-page/filled-favorites-page';
import usePageLayout from '../../hooks/use-page-layout';
import { useAppSelector } from '../../hooks/store';

type FavoritesPageProps = {
  favoritesCount: number;
};

export default function FavoritesPage({ favoritesCount }: FavoritesPageProps) {
  const mockOffers = useAppSelector((state) => state.mockOffers);
  const { emptyFavorites } = usePageLayout({
    favoritesCount,
  });

  return (
    <div className="page__favorites-container container">
      {emptyFavorites ? (
        <EmptyFavoritesPage />
      ) : (
        <FilledFavoritesPage mockOffers={mockOffers} />
      )}
    </div>
  );
}
