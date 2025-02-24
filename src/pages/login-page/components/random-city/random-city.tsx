import { Link } from 'react-router-dom';
import { useActionCreators } from '../../../../hooks/store';
import { offersActions } from '../../../../store/slices/offers/offers';
import { AppRoute, CITIES } from '../../../../utils/data/data';
import { randomArrayIndex } from '../../../../utils/utils/random-array-index';
import { memo } from 'react';

function RandomCityInner() {
  const { name } = CITIES[randomArrayIndex(CITIES)];
  const { setCity } = useActionCreators(offersActions);

  const cityName = name;

  return (
    <section className="locations locations--login locations--current">
      <div className="locations__item">
        <Link
          className="locations__item-link"
          onClick={() => setCity(name)}
          to={AppRoute.Root}
        >
          <span>{cityName}</span>
        </Link>
      </div>
    </section>
  );
}

const RandomCity = memo(RandomCityInner);

export default RandomCity;
