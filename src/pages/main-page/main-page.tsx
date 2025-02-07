import usePageLayout from '../../hooks/use-page-layout';
import { useState } from 'react';
import { useAppSelector } from '../../hooks/store';

import EmptyMainPage from '../../components/empty-main-page/empty-main-page';
import FilledMainPage from '../../components/filled-main-page/filled-main-page';
import Map from '../../components/map/map';
import LocationsList from '../../components/locations-list/locations-list';

import { Offer } from '../../mocks/mock-types/offers';
import { offersSelectors } from '../../store/slices/offers';

export default function MainPage() {
  const mockOffers = useAppSelector(offersSelectors.offers);
  const currentCity = useAppSelector(offersSelectors.city);

  const currentOffers = mockOffers.filter(
    (offer) => offer.city.name === currentCity,
  );

  const { emptyMain, emptyPageContainerClassName } = usePageLayout({
    currentOffers,
  });

  const [activeOffer, setActiveOffer] = useState<Offer | undefined>(undefined);
  const handleActiveOffer = (offer?: Offer) => {
    setActiveOffer(offer || undefined);

    return activeOffer;
  };

  return (
    <>
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <LocationsList />
        </section>
      </div>
      <div className="cities">
        <div
          className={`cities__places-container container ${emptyPageContainerClassName}`}
        >
          {emptyMain ? (
            <EmptyMainPage currentCity={currentCity} />
          ) : (
            <FilledMainPage
              currentOffers={currentOffers}
              onActiveOffer={handleActiveOffer}
            />
          )}
          <div className="cities__right-section">
            {!emptyMain && (
              <Map
                className="cities__map"
                currentOffers={currentOffers}
                activeOffer={activeOffer}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
}
