import EmptyFavoritesPage from '../../components/empty-favorites-page/empty-favorites-page';
import FilledFavoritesPage from '../../components/filled-favorites-page/filled-favorites-page';
import usePageLayout from '../../hooks/use-page-layout';
import { useAppSelector } from '../../hooks/store';
import { offersSelectors } from '../../store/slices/offers';

type FavoritesPageProps = {
  favoritesCount: number;
};

export default function FavoritesPage({ favoritesCount }: FavoritesPageProps) {
  const mockOffers = useAppSelector(offersSelectors.offers);
  const currentOffers = useAppSelector(offersSelectors.cityOffers);
  const { emptyFavorites } = usePageLayout({
    favoritesCount,
    currentOffers,
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
