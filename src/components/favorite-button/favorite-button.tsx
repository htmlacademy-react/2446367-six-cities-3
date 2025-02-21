import { useActionCreators } from '../../hooks/store';
import { useAuth } from '../../hooks/user-authorization';
import { useNavigate } from 'react-router-dom';
import { memo, useState } from 'react';

import classNames from 'classnames';

import { favoritesActions } from '../../store/slices/favorites/favorites';
import { AppRoute } from '../../utils/data/data';

type FavoriteButtonProps = {
  bemBlock: 'offer' | 'place-card';
  isFavorite?: boolean;
  offerID: string;
  width?: number;
};

const enum Default {
  HeightCoefficient = 18 / 17,
}

function BaseFavoriteButton({
  bemBlock = 'place-card',
  isFavorite: isFavoriteProp = false,
  offerID,
  width = 18,
}: FavoriteButtonProps) {
  const [isFavorite, setIsFavorite] = useState(isFavoriteProp);

  const { changeFavorite } = useActionCreators(favoritesActions);
  const isAuthorized = useAuth();
  const navigate = useNavigate();

  const isActiveButton = isAuthorized && isFavorite;

  const favoriteLabel = `${isActiveButton ? 'In' : 'To'} bookmarks`;
  const buttonClass = `${bemBlock}__bookmark-button`;
  const favoriteClass = classNames(
    buttonClass,
    { [`${buttonClass}--active`]: isActiveButton },
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

    setIsFavorite((prev) => !prev);
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

export const FavoriteButton = memo(BaseFavoriteButton);
