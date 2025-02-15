import FavoriteOfferCard from '../favorite-offer-card/favorite-offer-card';
import { ServerOffer } from '../../types/offer';

type FavoriteOfferListProps = {
  mockOffers: ServerOffer[];
};

export default function FavoriteOfferList({
  mockOffers,
}: FavoriteOfferListProps) {
  return (
    <ul className="favorites__list">
      <li className="favorites__locations-items">
        <div className="favorites__locations locations locations--current">
          <div className="locations__item">
            <a className="locations__item-link" href="#">
              <span>Amsterdam</span>
            </a>
          </div>
        </div>
        <div className="favorites__places">
          {mockOffers.map((offer) => (
            offer.isFavorite && <FavoriteOfferCard favoriteOffer={offer} key={offer.id} />
          ))}
        </div>
      </li>
    </ul>
  );
}
