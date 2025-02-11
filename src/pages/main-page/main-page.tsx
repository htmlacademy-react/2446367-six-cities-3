import usePageLayout from '../../hooks/use-page-layout';
import { useActionCreators, useAppSelector } from '../../hooks/store';

import EmptyMainPage from '../../components/empty-main-page/empty-main-page';
import FilledMainPage from '../../components/filled-main-page/filled-main-page';
import Map from '../../components/map/map';
import LocationsList from '../../components/locations-list/locations-list';

import { offersActions, offersSelectors } from '../../store/slices/offers';
import { MouseEvent, useState } from 'react';
import { SortOption } from '../../components/sorting-form/data';

export default function MainPage() {
  const currentCity = useAppSelector(offersSelectors.city);
  const currentOffers = useAppSelector(offersSelectors.cityOffers);

  const { emptyMain, emptyPageContainerClassName } = usePageLayout({
    currentOffers,
  });

  const { setActiveId } = useActionCreators(offersActions);

  const [activeSort, setActiveSort] = useState(SortOption.Popular);

  const handleActiveOn = (evt: MouseEvent<HTMLElement>) => {
    const target = evt.currentTarget as HTMLElement;
    const id = target.dataset.id;
    setActiveId(id);
  };

  const handleActiveOff = () => {
    setActiveId(undefined);
  };

  let sortedOffers = currentOffers;

  if (activeSort === SortOption.PriceLowToHigh) {
    sortedOffers = [...currentOffers].sort((a, b) => a.price - b.price);
  }

  if (activeSort === SortOption.PriceHighToLow) {
    sortedOffers = [...currentOffers].sort((a, b) => b.price - a.price);
  }

  if (activeSort === SortOption.TopRatedFirst) {
    sortedOffers = [...currentOffers].sort((a, b) => b.rating - a.rating);
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
              currentOffers={sortedOffers}
              currentCity={currentCity}
              current={activeSort}
              setter={setActiveSort}
              handleActiveOn={handleActiveOn}
              handleActiveOff={handleActiveOff}
            />
          )}
          <div className="cities__right-section">
            {!emptyMain && (
              <Map className="cities__map" currentCity={currentCity} currentOffers={currentOffers} />
            )}
          </div>
        </div>
      </div>
    </>
  );
}
