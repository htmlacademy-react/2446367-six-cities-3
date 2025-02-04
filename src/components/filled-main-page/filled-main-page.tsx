import SortingForm from '../sorting-form/sorting-form';
import OfferList from '../offer-list/offer-list';
import { Offer, Offers } from '../../mocks/mock-types/offers';
import { useAppSelector } from '../../hooks/store';

type FilledMainPageProps = {
  currentOffers: Offers;
  onActiveOffer: (offer?: Offer) => void;
};

export default function FilledMainPage({
  currentOffers,
  onActiveOffer,
}: FilledMainPageProps) {
  const currentCity = useAppSelector((state) => state.city);

  return (
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">
        {currentOffers.length} places to stay in {currentCity}
      </b>
      <SortingForm />
      <OfferList currentOffers={currentOffers} onActiveOffer={onActiveOffer} />
    </section>
  );
}
