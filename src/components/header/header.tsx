import { AuthorizationStatus } from '../../utils/data';
import HeaderNav from './header-nav';
import Logo from '../logo/logo';
import LogoLink from '../logo/logo-link';

type HeaderProps = {
  favoritesCount: number;
  authorizationStatus: AuthorizationStatus;
  headerOnMainPage: boolean;
  headerOnLoginPage: boolean;
};

export default function Header({
  favoritesCount,
  authorizationStatus,
  headerOnMainPage,
  headerOnLoginPage
}: HeaderProps) {

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
