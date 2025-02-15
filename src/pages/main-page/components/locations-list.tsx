import { useActionCreators, useAppSelector } from '../../../hooks/store';

import { offersActions, offersSelector } from '../../../store/slices/offers';
import { CITIES } from '../../../utils/data';

export default function LocationsList() {
  const currentCity = useAppSelector(offersSelector.city);
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
