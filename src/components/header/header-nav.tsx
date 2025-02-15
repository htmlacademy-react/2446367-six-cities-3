import { Link } from 'react-router-dom';
import { AppRoute } from '../../utils/data';
import { useAuth } from '../../hooks/user-authorization';

type HeaderNavProps = {
  favoritesCount: number;
};

export default function HeaderNav({ favoritesCount }: HeaderNavProps) {
  const isAuthorized = useAuth();
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
                  Oliver.conner@gmail.com
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
            <a className="header__nav-link" href="#">
              <span className="header__signout">Sign out</span>
            </a>
          </li>
        )}
      </ul>
    </nav>
  );
}
