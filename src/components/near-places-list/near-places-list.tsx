import type { ServerOffer } from '../../types/offer';

import OfferCard from '../offer-card/offer-card';

type NearPlacesListProps = {
  nearOffers: ServerOffer[];
};

export default function NearPlacesList({ nearOffers }: NearPlacesListProps) {
  return (
    <div className="near-places__list places__list">
      {nearOffers.map((offer) => (
        <OfferCard offer={offer} key={offer.id} pageClassName='near-places'/>
      ))}
    </div>
  );
}
