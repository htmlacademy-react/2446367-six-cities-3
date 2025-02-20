import { useState } from 'react';
import { useActionCreators } from '../../../hooks/store';

import type { MouseEvent } from 'react';
import type { CityName } from '../../../types/city';
import type { ServerOffer } from '../../../types/offer';

import { OfferList } from '../../../components/offer-list/offer-list';
import { SortingForm } from '../../../components/sorting-form/sorting-form';

import { SortOption } from '../../../utils/data/data';
import { offersActions } from '../../../store/slices/offers/offers';

type FilledMainSectionProps = {
  offers: ServerOffer[];
  city: CityName;
};

export function FilledMainSection({
  offers,
  city,
}: FilledMainSectionProps) {
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

  let sortedOffers = offers;

  if (activeSort === SortOption.PriceLowToHigh) {
    sortedOffers = [...offers].sort((a, b) => a.price - b.price);
  }

  if (activeSort === SortOption.PriceHighToLow) {
    sortedOffers = [...offers].sort((a, b) => b.price - a.price);
  }

  if (activeSort === SortOption.TopRatedFirst) {
    sortedOffers = [...offers].sort((a, b) => b.rating - a.rating);
  }

  return (
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">
        {offers.length} place{offers.length > 1 && 's'} to stay in{' '}
        {city}
      </b>
      <SortingForm current={activeSort} setter={setActiveSort} />
      <OfferList
        offers={sortedOffers}
        handleActiveOn={handleActiveOn}
        handleActiveOff={handleActiveOff}
      />
    </section>
  );
}
