import SortingForm from '../../components/sorting-form/sorting-form';
import OfferList from '../../components/offer-list/offer-list';
import { Offers } from '../../mocks/mock-types/offers';

type NoEmptyMainProps = {
  offersCount: number;
  mockOffers: Offers;
};

export default function NoEmptyMainPage({
  offersCount,
  mockOffers,
}: NoEmptyMainProps) {
  return (
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">{offersCount} places to stay in Amsterdam</b>
      <SortingForm />
      <OfferList mockOffers={mockOffers} />
    </section>
  );
}
