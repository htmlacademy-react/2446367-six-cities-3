import { useState } from 'react';
import { useActionCreators } from '../../../hooks/store';

import type { MouseEvent } from 'react';
import type { CityName } from '../../../types/city';
import type { ServerOffer } from '../../../types/offer';

import SortingForm from '../../../components/sorting-form/sorting-form';
import OfferList from '../../../components/offer-list/offer-list';

import { SortOption } from '../../../components/sorting-form/data';
import { offersActions } from '../../../store/slices/offers';

type FilledMainPageProps = {
  currentOffers: ServerOffer[];
  currentCity: CityName;
};

export default function FilledMainPage({
  currentOffers,
  currentCity,
}: FilledMainPageProps) {
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
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">
        {currentOffers.length} place{currentOffers.length > 1 && 's'} to stay in{' '}
        {currentCity}
      </b>
      <SortingForm current={activeSort} setter={setActiveSort} />
      <OfferList
        currentOffers={sortedOffers}
        handleActiveOn={handleActiveOn}
        handleActiveOff={handleActiveOff}
      />
    </section>
  );
}
