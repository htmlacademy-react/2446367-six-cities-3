import { Offer, Offers } from '../../mocks/mock-types/offers';
import { useState } from 'react';
import { Nullable } from 'vitest';
import OfferCard from '../offer-card/offer-card';

type OfferListProps = {
  mockOffers: Offers;
};

export default function OfferList({ mockOffers }: OfferListProps) {
  const [activeOffer, setActiveOffer] = useState<Nullable<Offer>>(null);
  const handleActiveOffer = (offer?: Offer) => {
    setActiveOffer(offer || null);

    return activeOffer;
  };

  return (
    <div className="cities__places-list places__list tabs__content">
      {mockOffers.map((offer) => (
        <OfferCard
          offer={offer}
          key={offer.id}
          handleActiveOffer={handleActiveOffer}
        />
      ))}
    </div>
  );
}
