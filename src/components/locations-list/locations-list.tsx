import { useState } from 'react';
import { CITIES } from '../../utils/data';

export default function LocationsList() {
  const [location, setLocation] = useState('Amsterdam');

  return (
    <ul className="locations__list tabs__list">
      {CITIES.map(({ id, name }) => (
        <li className="locations__item" key={id} onClick={() => setLocation(name)}>
          <a
            className={`locations__item-link tabs__item ${name === location ? 'tabs__item--active' : ''}`}
            {...(name === location ? {} : { href: '#' })}
          >
            <span>{name}</span>
          </a>
        </li>
      ))}
    </ul>
  );
}
