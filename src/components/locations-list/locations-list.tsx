import { memo } from 'react';
import { useActionCreators, useAppSelector } from '../../hooks/store';

import { offersActions } from '../../store/slices/offers/offers';
import { AppRoute, CITIES } from '../../utils/data/data';
import { selectCity } from '../../store/selectors/offers';
import { Link } from 'react-router-dom';

function BaseLocationsList() {
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
            {...(name === currentCity ? {} : { href: '#' })}
            to={AppRoute.Root}
          >
            <span>{name}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export const LocationsList = memo(BaseLocationsList);
