import { memo } from 'react';

import { Logo } from './components/logo';
import { LoggedNav } from './components/logged-nav';

type HeaderProps = {
  headerOnMainPage: boolean;
  headerOnLoginPage: boolean;
};

function BaseHeader({
  headerOnMainPage,
  headerOnLoginPage,
}: HeaderProps) {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Logo isLink={headerOnMainPage} />
          </div>
          {!headerOnLoginPage && <LoggedNav />}
        </div>
      </div>
    </header>
  );
}

export const Header = memo(BaseHeader);
