import SortingForm from '../../components/sorting-form/sorting-form';
import PlaceCard from '../../components/place-card/place-card';

type NoEmptyMainProps = {
  offersCount: number;
}

export default function NoEmptyMainPage ({offersCount}: NoEmptyMainProps) {
  return (
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">{offersCount} places to stay in Amsterdam</b>
      <SortingForm />
      <div className="cities__places-list places__list tabs__content">
        <PlaceCard />
        <PlaceCard />
        <PlaceCard />
        <PlaceCard />
        <PlaceCard />
      </div>
    </section>
  );
}
