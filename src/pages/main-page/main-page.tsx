import PlaceCard from '../../components/place-card/place-card';
import SortingForm from '../../components/sorting-form/sorting-form';

type MainOffersProps = {
  offersCount: number;
};

let emptyMain: boolean = false;

const MainEmptyClassName = {
  NoEmptyMainClassName: 'page__main page__main--index',
  EmptyMainClassName: 'page__main page__main--index page__main--index-empty',
  NoEmptyContainerClassName: 'cities__places-container container',
  EmptyContainerClassName: 'cities__places-container cities__places-container--empty container',
};

const isEmptyMain = (offersCount: number) => {
  if (offersCount === 0) {
    emptyMain = true;

    return (
      <section className="cities__no-places">
        <div className="cities__status-wrapper tabs__content">
          <b className="cities__status">No places to stay available</b>
          <p className="cities__status-description">
            We could not find any property available at the moment in Dusseldorf
          </p>
        </div>
      </section>
    );
  }

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
};

export default function MainPage({ offersCount }: MainOffersProps) {
  return (
    <main className={emptyMain ? MainEmptyClassName.EmptyMainClassName : MainEmptyClassName.NoEmptyMainClassName}>
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <ul className="locations__list tabs__list">
            <li className="locations__item">
              <a className="locations__item-link tabs__item" href="#">
                <span>Paris</span>
              </a>
            </li>
            <li className="locations__item">
              <a className="locations__item-link tabs__item" href="#">
                <span>Cologne</span>
              </a>
            </li>
            <li className="locations__item">
              <a className="locations__item-link tabs__item" href="#">
                <span>Brussels</span>
              </a>
            </li>
            <li className="locations__item">
              <a className="locations__item-link tabs__item tabs__item--active">
                <span>Amsterdam</span>
              </a>
            </li>
            <li className="locations__item">
              <a className="locations__item-link tabs__item" href="#">
                <span>Hamburg</span>
              </a>
            </li>
            <li className="locations__item">
              <a className="locations__item-link tabs__item" href="#">
                <span>Dusseldorf</span>
              </a>
            </li>
          </ul>
        </section>
      </div>
      <div className="cities">
        <div
          className={
            emptyMain ? MainEmptyClassName.NoEmptyContainerClassName : MainEmptyClassName.EmptyContainerClassName
          }
        >
          {isEmptyMain(offersCount)}
          <div className="cities__right-section">
            {!emptyMain && <section className="cities__map map"></section>}
          </div>
        </div>
      </div>
    </main>
  );
}
