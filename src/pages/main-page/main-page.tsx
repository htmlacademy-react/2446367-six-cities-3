import EmptyMainPage from '../../components/empty-main-page/empty-main-page';
import FilledMainPage from '../../components/filled-main-page/filled-main-page';
import usePageLayout from '../../components/layout/use-page-layout';
import { Offers } from '../../mocks/mock-types/offers';

type MainOffersProps = {
  offersCount: number;
  mockOffers: Offers;
};

export default function MainPage({ offersCount, mockOffers }: MainOffersProps) {
  const { emptyMain, emptyPageContainerClassName } = usePageLayout({
    offersCount,
  });
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
            <FilledMainPage offersCount={offersCount} mockOffers={mockOffers} />
          )}
          <div className="cities__right-section">
            {!emptyMain && <section className="cities__map map"></section>}
          </div>
        </div>
      </div>
    </>
  );
}
