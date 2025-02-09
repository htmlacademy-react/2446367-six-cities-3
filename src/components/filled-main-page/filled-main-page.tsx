import SortingForm from '../sorting-form/sorting-form';
import OfferList from '../offer-list/offer-list';

import { Offers } from '../../mocks/mock-types/offers';
import { MouseEventHandler } from 'react';
import { CityName } from '../../utils/data';

type FilledMainPageProps = {
  currentOffers: Offers;
  currentCity: CityName;
  handleActiveOn: MouseEventHandler<HTMLElement>;
  handleActiveOff: MouseEventHandler<HTMLElement>;
};

export default function FilledMainPage({
  currentOffers,
  currentCity,
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
      <SortingForm />
      <OfferList
        currentOffers={currentOffers}
        handleActiveOn={handleActiveOn}
        handleActiveOff={handleActiveOff}
      />
    </section>
  );
}
