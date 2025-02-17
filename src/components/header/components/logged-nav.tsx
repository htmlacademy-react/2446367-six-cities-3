import { useAuth } from '../../../hooks/user-authorization';
import { userActions, userSelector } from '../../../store/slices/user';
import { useActionCreators, useAppSelector } from '../../../hooks/store';
import useFavoriteCount from '../../../hooks/use-favorite-count';

import { Link } from 'react-router-dom';
import { AppRoute } from '../../../utils/data';

export default function LoggedNav() {
  const isAuthorized = useAuth();
  const user = useAppSelector(userSelector.info);
  const { logout } = useActionCreators(userActions);
  const favoritesCount = useFavoriteCount();
  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        <li className="header__nav-item user">
          <Link
            className="header__nav-link header__nav-link--profile"
            to={AppRoute.Favorites}
          >
            <div className="header__avatar-wrapper user__avatar-wrapper"></div>
            {isAuthorized ? (
              <>
                <span className="header__user-name user__name">
                  {user?.email}
                </span>
                <span className="header__favorite-count">{favoritesCount}</span>
              </>
            ) : (
              <span className="header__login">Sign in</span>
            )}
          </Link>
        </li>
        {isAuthorized && (
          <li className="header__nav-item">
            <Link
              className="header__nav-link"
              onClick={() => {
                logout();
              }}
              to="#"
            >
              <span className="header__signout">Sign out</span>
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
}
