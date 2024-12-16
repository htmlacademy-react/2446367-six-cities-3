import { AppRoute, AuthorizationStatus } from '../../data';
import HeaderNav from './header-nav';
import { createHeader } from './header-util';

type HeaderProps = {
  pathname: AppRoute;
  favoritesCount: number;
  authorizationStatus: AuthorizationStatus;
};

export default function Header({
  pathname,
  favoritesCount,
  authorizationStatus,
}: HeaderProps) {
  const { headerLinkClassName, headerOnMainPage, headerOnLoginPage } =
    createHeader(pathname);

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <a
              className={`header__logo-link ${headerLinkClassName}`}
              {...(!headerOnMainPage && { href: 'main.html' })}
            >
              <img
                className="header__logo"
                src="img/logo.svg"
                alt="6 cities logo"
                width="81"
                height="41"
              />
            </a>
          </div>
          {!headerOnLoginPage && (
            <HeaderNav
              favoritesCount={favoritesCount}
              authorizationStatus={authorizationStatus}
            />
          )}
        </div>
      </div>
    </header>
  );
}
