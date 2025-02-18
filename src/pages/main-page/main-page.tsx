import usePageLayout from '../../hooks/use-page-layout';
import { useAppSelector } from '../../hooks/store';

import EmptyMainSection from './components/empty-main-section';
import FilledMainSection from './components/filled-main-section';
import { Map } from '../../components/map/map';
import LocationsList from './components/locations-list';
import Spinner from '../../components/spinner/spinner';

import { offersSelector } from '../../store/slices/offers';
import { RequestStatus } from '../../utils/data';

export default function MainPage() {
  const city = useAppSelector(offersSelector.city);

  const offers = useAppSelector(offersSelector.cityOffers);
  const offersLength = offers.length;
  const status = useAppSelector(offersSelector.status);

  const { emptyMain, emptyPageContainerClassName } = usePageLayout({
    offersLength,
  });

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
            <EmptyMainSection city={city} />
          ) : (
            <FilledMainSection offers={offers} city={city} />
          )}
          <div className="cities__right-section">
            {!emptyMain && (
              <Map className="cities__map" city={city} offers={offers} />
            )}
          </div>
        </div>
      </div>
    </>
  );
}
