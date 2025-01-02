import FavoriteOfferList from '../../components/favorite-offer-list/favorite-offer-list';
import { Offers } from '../../mocks/mock-types/offers';

type NoEmptyFavoritesPageProps = {
  mockOffers: Offers;
}

export default function NoEmptyFavoritesPage({mockOffers}: NoEmptyFavoritesPageProps) {
  return (
    <section className="favorites">
      <h1 className="favorites__title">Saved listing</h1>
      <FavoriteOfferList mockOffers={mockOffers} />
    </section>
  );
}
