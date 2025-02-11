import SortingForm from '../sorting-form/sorting-form';
import OfferList from '../offer-list/offer-list';

import { Offers } from '../../mocks/mock-types/offers';
import { MouseEventHandler } from 'react';
import { CityName } from '../../utils/data';
import { SortOption } from '../sorting-form/data';

type FilledMainPageProps = {
  currentOffers: Offers;
  currentCity: CityName;
  current: SortOption;
  setter: (option: SortOption) => void;
  handleActiveOn: MouseEventHandler<HTMLElement>;
  handleActiveOff: MouseEventHandler<HTMLElement>;
};

export default function FilledMainPage({
  currentOffers,
  currentCity,
  current,
  setter,
  handleActiveOn,
  handleActiveOff,
}: FilledMainPageProps) {
  return (
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">
        {currentOffers.length} place{currentOffers.length > 1 && 's'} to stay in{' '}
        {currentCity}
      </b>
      <SortingForm current={current} setter={setter} />
      <OfferList
        currentOffers={currentOffers}
        handleActiveOn={handleActiveOn}
        handleActiveOff={handleActiveOff}
      />
    </section>
  );
}
