import { Offer, Offers } from '../../mocks/mock-types/offers';
import OfferCard from '../offer-card/offer-card';

type OfferListProps = {
  currentOffers: Offers;
  onActiveOffer: (offer?: Offer) => void;
};

export default function OfferList({ currentOffers, onActiveOffer }: OfferListProps) {
  return (
    <div className="cities__places-list places__list tabs__content">
      {currentOffers.map((offer) => (
        <OfferCard
          offer={offer}
          pageClassName='cities'
          key={offer.id}
          onActiveOffer={onActiveOffer}
        />
      ))}
    </div>
  );
}
