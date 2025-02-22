import { useActionCreators, useAppSelector } from '../../hooks/store';

import { Link } from 'react-router-dom';

import { offersActions } from '../../store/slices/offers/offers';
import { AppRoute, CITIES } from '../../utils/data/data';
import { selectCity } from '../../store/selectors/offers';

export default function LocationsList() {
  const currentCity = useAppSelector(selectCity);
  const { setCity } = useActionCreators(offersActions);

  return (
    <ul className="locations__list tabs__list">
      {CITIES.map(({ id, name }) => (
        <li
          className="locations__item"
          key={id}
          onClick={(evt) => {
            evt.preventDefault();
            setCity(name);
          }}
        >
          <Link
            className={`locations__item-link tabs__item ${name === currentCity ? 'tabs__item--active' : ''}`}
            to={name === currentCity ? '#' : AppRoute.Root}
          >
            <span>{name}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
