import { CITIES } from '../../utils/data';
import { useAppDispatch, useAppSelector } from '../../hooks/store';
import { setCity } from '../../store/reducer';

export default function LocationsList() {
  const currentCity = useAppSelector((state) => state.city);
  const dispatch = useAppDispatch();

  return (
    <ul className="locations__list tabs__list">
      {CITIES.map(({ id, name }) => (
        <li
          className="locations__item"
          key={id}
          onClick={(evt) => {
            evt.preventDefault();
            dispatch(setCity(name));
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
