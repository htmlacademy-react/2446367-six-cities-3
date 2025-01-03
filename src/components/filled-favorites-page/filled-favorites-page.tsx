import FavoriteOfferList from '../favorite-offer-list/favorite-offer-list';
import { Offers } from '../../mocks/mock-types/offers';

type FilledFavoritesPageProps = {
  mockOffers: Offers;
}

export default function FilledFavoritesPage({mockOffers}: FilledFavoritesPageProps) {
  return (
    <section className="favorites">
      <h1 className="favorites__title">Saved listing</h1>
      <FavoriteOfferList mockOffers={mockOffers} />
    </section>
  );
}
