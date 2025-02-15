import OfferCard from '../offer-card/offer-card';

import { MouseEventHandler } from 'react';
import { ServerOffer } from '../../types/offer';

type OfferListProps = {
  currentOffers: ServerOffer[];
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
