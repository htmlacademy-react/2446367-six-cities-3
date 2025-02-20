import { memo } from 'react';
import { useActionCreators, useAppSelector } from '../../hooks/store';

import { offersActions } from '../../store/slices/offers/offers';
import { CITIES } from '../../utils/data';
import { selectCity } from '../../store/selectors/offers';

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
          <a
            className={`locations__item-link tabs__item ${name === currentCity ? 'tabs__item--active' : ''}`}
            {...(name === currentCity ? {} : { href: '#' })}
          >
            <span>{name}</span>
          </a>
        </li>
      ))}
    </ul>
  );
}

export const LocationsList = memo(BaseLocationsList);
