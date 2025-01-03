import { AppRoute, AuthorizationStatus } from '../../utils/data';
import { createHeader } from './header-util';
import HeaderNav from './header-nav';
import Logo from '../logo/logo';
import LogoLink from '../logo/logo-link';

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
  const { headerOnMainPage, headerOnLoginPage } =
    createHeader(pathname);

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            {headerOnMainPage ? <Logo/> : <LogoLink/>}
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
