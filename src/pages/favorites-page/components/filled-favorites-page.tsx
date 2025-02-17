import type { ServerOffer } from '../../../types/offer';

import OfferCard from '../../../components/offer-card/offer-card';

type FilledFavoritesSectionProps = {
  favorites: ServerOffer[];
};

export default function FilledFavoritesSection({
  favorites,
}: FilledFavoritesSectionProps) {
  return (
    <section className="favorites">
      <h1 className="favorites__title">Saved listing</h1>
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
            {favorites.map((offer) => (
              <OfferCard
                offer={offer}
                key={offer.id}
                pageClassName="favorites"
                imageWrapperClassName="favorites__image-wrapper place-card__image-wrapper"
                imageWidth={150}
                imageHeight={110}
              />
            ))}
          </div>
        </li>
      </ul>
    </section>
  );
}
