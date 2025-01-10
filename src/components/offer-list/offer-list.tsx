import { Offer, Offers } from '../../mocks/mock-types/offers';
import OfferCard from '../offer-card/offer-card';

type OfferListProps = {
  mockOffers: Offers;
  onActiveOffer: (offer?: Offer) => void;
};

export default function OfferList({ mockOffers, onActiveOffer }: OfferListProps) {
  return (
    <div className="cities__places-list places__list tabs__content">
      {mockOffers.map((offer) => (
        <OfferCard
          offer={offer}
          key={offer.id}
          onActiveOffer={onActiveOffer}
        />
      ))}
    </div>
  );
}
