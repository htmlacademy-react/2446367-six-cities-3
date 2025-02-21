import type { ServerOffer } from '../../../types/offer';

import { OfferCard } from '../../../components/offer-card/offer-card';

import { favoritesByCity } from '../../../utils/utils/favorites-by-city';

type FilledFavoritesSectionProps = {
  favorites: ServerOffer[];
};

export function FilledFavoritesSection({
  favorites,
}: FilledFavoritesSectionProps) {
  const groupedFavorites = favoritesByCity(favorites);

  return (
    <section className="favorites">
      <h1 className="favorites__title">Saved listing</h1>
      <ul className="favorites__list">
        {Object.entries(groupedFavorites).map(([city, offers]) => (
          <li className="favorites__locations-items" key={city}>
            <div className="favorites__locations locations locations--current">
              <div className="locations__item">
                <a className="locations__item-link" href="#">
                  <span>{city}</span>
                </a>
              </div>
            </div>
            <div className="favorites__places">
              {offers.map((offer) => (
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
        ))}
      </ul>
    </section>
  );
}
