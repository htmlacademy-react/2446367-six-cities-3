import { Link } from 'react-router-dom';
import { useActionCreators } from '../../../hooks/store';
import { offersActions } from '../../../store/slices/offers/offers';
import { AppRoute, CITIES } from '../../../utils/data';
import { randomIndex } from '../../../utils/utils';

export function RandomCity() {
  const { name } = CITIES[randomIndex(CITIES)];
  const { setCity } = useActionCreators(offersActions);

  return (
    <section className="locations locations--login locations--current">
      <div className="locations__item">
        <Link
          className="locations__item-link"
          onClick={() => setCity(name)}
          to={AppRoute.Root}
        >
          <span>{name}</span>
        </Link>
      </div>
    </section>
  );
}
