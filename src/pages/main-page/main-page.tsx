import usePageLayout from '../../hooks/use-page-layout';
import { useAppSelector } from '../../hooks/store';

import EmptyMainPage from '../../components/empty-main-page/empty-main-page';
import FilledMainPage from '../../components/filled-main-page/filled-main-page';
import Map from '../../components/map/map';
import LocationsList from '../../components/locations-list/locations-list';

import { offersSelector } from '../../store/slices/offers';
import { RequestStatus } from '../../utils/data';
import Spinner from '../../components/spinner/spinner';

export default function MainPage() {
  const currentCity = useAppSelector(offersSelector.city);
  const currentOffers = useAppSelector(offersSelector.cityOffers);

  const { emptyMain, emptyPageContainerClassName } = usePageLayout({
    currentOffers,
  });

  const status = useAppSelector(offersSelector.status);

  if (status === RequestStatus.Loading) {
    return <Spinner />;
  }

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
              currentCity={currentCity}
            />
          )}
          <div className="cities__right-section">
            {!emptyMain && (
              <Map
                className="cities__map"
                currentCity={currentCity}
                currentOffers={currentOffers}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
}
