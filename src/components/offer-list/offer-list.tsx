import OfferCard from '../offer-card/offer-card';

import { Offers } from '../../mocks/mock-types/offers';
import { MouseEventHandler } from 'react';

type OfferListProps = {
  currentOffers: Offers;
  handleActiveOn: MouseEventHandler<HTMLElement>;
  handleActiveOff: MouseEventHandler<HTMLElement>;
};

export default function OfferList({ currentOffers, handleActiveOn, handleActiveOff }: OfferListProps) {
  return (
    <div className="cities__places-list places__list tabs__content">
      {currentOffers.map((offer) => (
        <OfferCard
          offer={offer}
          pageClassName='cities'
          key={offer.id}
          handleActiveOn={handleActiveOn}
          handleActiveOff={handleActiveOff}
        />
      ))}
    </div>
  );
}
