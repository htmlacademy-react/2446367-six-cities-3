import { useState } from 'react';
import { Offer, Offers } from '../../mocks/mock-types/offers';
import EmptyMainPage from '../../components/empty-main-page/empty-main-page';
import FilledMainPage from '../../components/filled-main-page/filled-main-page';
import usePageLayout from '../../hooks/use-page-layout';
import Map from '../../components/map/map';

type MainOffersProps = {
  offersCount: number;
  mockOffers: Offers;
};

export default function MainPage({ offersCount, mockOffers }: MainOffersProps) {
  const { emptyMain, emptyPageContainerClassName } = usePageLayout({
    offersCount,
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
          <ul className="locations__list tabs__list">
            <li className="locations__item">
              <a className="locations__item-link tabs__item" href="#">
                <span>Paris</span>
              </a>
            </li>
            <li className="locations__item">
              <a className="locations__item-link tabs__item" href="#">
                <span>Cologne</span>
              </a>
            </li>
            <li className="locations__item">
              <a className="locations__item-link tabs__item" href="#">
                <span>Brussels</span>
              </a>
            </li>
            <li className="locations__item">
              <a className="locations__item-link tabs__item tabs__item--active">
                <span>Amsterdam</span>
              </a>
            </li>
            <li className="locations__item">
              <a className="locations__item-link tabs__item" href="#">
                <span>Hamburg</span>
              </a>
            </li>
            <li className="locations__item">
              <a className="locations__item-link tabs__item" href="#">
                <span>Dusseldorf</span>
              </a>
            </li>
          </ul>
        </section>
      </div>
      <div className="cities">
        <div
          className={`cities__places-container container ${emptyPageContainerClassName}`}
        >
          {emptyMain ? (
            <EmptyMainPage />
          ) : (
            <FilledMainPage
              offersCount={offersCount}
              mockOffers={mockOffers}
              onActiveOffer={handleActiveOffer}
            />
          )}
          <div className="cities__right-section">
            {!emptyMain && (
              <Map mockOffers={mockOffers} activeOffer={activeOffer} />
            )}
          </div>
        </div>
      </div>
    </>
  );
}
