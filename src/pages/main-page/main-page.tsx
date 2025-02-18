import { useAppSelector } from '../../hooks/store';

import { EmptyMainSection } from './components/empty-main-section';
import { FilledMainSection } from './components/filled-main-section';
import { Map } from '../../components/map/map';
import { LocationsList } from './components/locations-list';
import { Spinner } from '../../components/spinner/spinner';

import { RequestStatus } from '../../utils/data';
import {
  selectCity,
  selectCityOffers,
  selectOffersStatus,
} from '../../store/selectors/offers';

export function MainPage() {
  const city = useAppSelector(selectCity);
  const status = useAppSelector(selectOffersStatus);

  const offers = useAppSelector(selectCityOffers);
  const offersLength = offers.length;

  const isEmpty = offersLength === 0;

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
          className={`cities__places-container container ${isEmpty ? 'cities__places-container--empty' : ''}`}
        >
          {isEmpty ? (
            <EmptyMainSection city={city} />
          ) : (
            <FilledMainSection offers={offers} city={city} />
          )}
          <div className="cities__right-section">
            {!isEmpty && (
              <Map className="cities__map" city={city} offers={offers} />
            )}
          </div>
        </div>
      </div>
    </>
  );
}
