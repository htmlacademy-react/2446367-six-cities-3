import { Offers } from '../../mocks/mock-types/offers';
import OfferCard from '../offer-card/offer-card';

type OfferListProps = {
  mockOffers: Offers;
};

export default function OfferList({ mockOffers }: OfferListProps) {
  return (
    <div className="cities__places-list places__list tabs__content">
      {mockOffers.map((offer) => <OfferCard offer={offer} key={offer.id} />)}
    </div>
  );
}
