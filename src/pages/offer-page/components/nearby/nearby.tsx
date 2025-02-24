import { memo } from 'react';

import type { ServerOffer } from '../../../../types/offer';

import OfferCard from '../../../../components/offer-card/offer-card';

type NearbyProps = {
  nearOffers: ServerOffer[];
};

function NearbyInner({ nearOffers }: NearbyProps) {
  return (
    <section className="near-places places">
      <h2 className="near-places__title">Other places in the neighbourhood</h2>
      <div className="near-places__list places__list">
        {nearOffers.map((offer) => (
          <OfferCard offer={offer} key={offer.id} pageClassName="near-places" />
        ))}
      </div>
    </section>
  );
}

const Nearby = memo(NearbyInner);

export default Nearby;
