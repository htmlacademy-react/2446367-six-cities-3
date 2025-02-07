import { useAppDispatch, useAppSelector } from '../../hooks/store';

import { offersActions } from '../../store/slices/offers';
import { offersSelectors } from '../../store/slices/offers';
import { CITIES } from '../../utils/data';

export default function LocationsList() {
  const currentCity = useAppSelector(offersSelectors.city);
  const dispatch = useAppDispatch();

  return (
    <ul className="locations__list tabs__list">
      {CITIES.map(({ id, name }) => (
        <li
          className="locations__item"
          key={id}
          onClick={(evt) => {
            evt.preventDefault();
            dispatch(offersActions.setCity(name));
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
