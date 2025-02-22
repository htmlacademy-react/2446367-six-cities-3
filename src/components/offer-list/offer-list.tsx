import { memo } from 'react';

import type { MouseEventHandler } from 'react';
import type { ServerOffer } from '../../types/offer';

import OfferCard from '../offer-card/offer-card';

type OfferListProps = {
  offers: ServerOffer[];
  handleActiveOn: MouseEventHandler<HTMLElement>;
  handleActiveOff: MouseEventHandler<HTMLElement>;
};

function BaseOfferList({
  offers,
  handleActiveOn,
  handleActiveOff,
}: OfferListProps) {
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <OfferCard
          offer={offer}
          pageClassName="cities"
          key={offer.id}
          handleActiveOn={handleActiveOn}
          handleActiveOff={handleActiveOff}
        />
      ))}
    </div>
  );
}

const OfferList = memo(BaseOfferList);

export default OfferList;
