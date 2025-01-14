import { useState } from 'react';
import { cities } from '../../utils/data';

export default function LocationsList() {
  const [location, setLocation] = useState('Amsterdam');

  return (
    <ul className="locations__list tabs__list">
      {cities.map(({ id, title }) => (
        <li className="locations__item" key={id} onClick={() => setLocation(title)}>
          <a
            className={`locations__item-link tabs__item ${title === location ? 'tabs__item--active' : ''}`}
            {...(title === location ? {} : { href: '#' })}
          >
            <span>{title}</span>
          </a>
        </li>
      ))}
    </ul>
  );
}
