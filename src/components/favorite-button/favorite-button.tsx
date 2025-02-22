import { useAuth } from '../../hooks/user-authorization';
import { useActionCreators } from '../../hooks/store';
import { useNavigate } from 'react-router-dom';

import classNames from 'classnames';

import { AppRoute } from '../../utils/data/data';
import { favoritesActions } from '../../store/slices/favorites/favorites';

type FavoriteButtonProps = {
  bemBlock: 'offer' | 'place-card';
  isFavorite?: boolean;
  offerID: string;
  width?: number;
};

const enum Default {
  HeightCoefficient = 18 / 17,
}

export default function FavoriteButton({
  bemBlock = 'place-card',
  isFavorite,
  offerID,
  width = 18,
}: FavoriteButtonProps) {
  const { changeFavorite } = useActionCreators(favoritesActions);
  const isAuthorized = useAuth();
  const navigate = useNavigate();

  const isActive = isAuthorized && isFavorite;

  const favoriteLabel = `${isActive ? 'In' : 'To'} bookmarks`;
  const buttonClass = `${bemBlock}__bookmark-button`;
  const favoriteClass = classNames(
    buttonClass,
    { [`${buttonClass}--active`]: isActive },
    'button',
  );

  const height = width * Default.HeightCoefficient;

  const handleClick = () => {
    if (!isAuthorized) {
      return navigate(AppRoute.Login);
    }

    changeFavorite({
      offerID,
      status: Number(!isFavorite),
    });
  };

  return (
    <button className={favoriteClass} onClick={handleClick} type="button">
      <svg
        className={`${bemBlock}__bookmark-icon`}
        width={width}
        height={height}
      >
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">{favoriteLabel}</span>
    </button>
  );
}
