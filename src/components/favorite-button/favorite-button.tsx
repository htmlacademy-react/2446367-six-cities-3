import { useActionCreators } from '../../hooks/store';
import { useAuth } from '../../hooks/user-authorization';
import { useNavigate } from 'react-router-dom';

import classNames from 'classnames';

import { favoritesActions } from '../../store/slices/favorites';
import { AppRoute } from '../../utils/data';

type FavoriteButtonProps = {
  className: 'offer' | 'place-card';
  isFavorite?: boolean;
  offerID: string;
  width?: number;
};

const enum Default {
  HeightCoefficient = 18 / 17,
}

export default function FavoriteButton({
  className = 'place-card',
  isFavorite = false,
  offerID,
  width = 18,
}: FavoriteButtonProps) {
  const isAuthorized = useAuth();
  const navigate = useNavigate();

  const favoriteLabel = `${isFavorite ? 'In' : 'To'} bookmarks`;
  const buttonClass = `${className}__bookmark-button`;
  const favoriteClass = classNames(
    buttonClass,
    { [`${buttonClass}--active`]: isFavorite },
    'button',
  );

  const height = width * Default.HeightCoefficient;

  const { changeFavorite } = useActionCreators(favoritesActions);

  function handleClick() {
    if (!isAuthorized) {
      return navigate(AppRoute.Login);
    }

    changeFavorite({
      offerID,
      status: Number(!isFavorite),
    });
  }

  return (
    <button className={favoriteClass} onClick={handleClick} type="button">
      <svg
        className={`${className}__bookmark-icon`}
        width={width}
        height={height}
      >
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">{favoriteLabel}</span>
    </button>
  );
}
