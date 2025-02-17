import Logo from './components/logo';
import LoggedNav from './components/logged-nav';

type HeaderProps = {
  headerOnMainPage: boolean;
  headerOnLoginPage: boolean;
};

export default function Header({
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
