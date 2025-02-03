import { Offers } from '../../mocks/mock-types/offers';
import OfferCard from '../offer-card/offer-card';

type NearPlacesListProps = {
  nearOffers: Offers;
};

export default function NearPlacesList({ nearOffers }: NearPlacesListProps) {
  return (
    <div className="near-places__list places__list">
      {nearOffers.map((offer, i) => (
        // eslint-disable-next-line react/no-array-index-key
        <OfferCard offer={offer} key={i} pageClassName='near-places'/>
      ))}
    </div>
  );
}
