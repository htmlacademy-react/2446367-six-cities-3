import { useState } from 'react';
import { useActionCreators } from '../../hooks/store';

import SortingForm from '../sorting-form/sorting-form';
import OfferList from '../offer-list/offer-list';

import { Offers } from '../../mocks/mock-types/offers';
import { CityName } from '../../utils/data';
import { SortOption } from '../sorting-form/data';
import { offersActions } from '../../store/slices/offers';
import { MouseEvent } from 'react';

type FilledMainPageProps = {
  currentOffers: Offers;
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
