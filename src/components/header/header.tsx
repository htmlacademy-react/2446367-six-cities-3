import Logo from './components/logo';
import Navigation from './components/navigation';

type HeaderProps = {
  favoritesCount: number;
  headerOnMainPage: boolean;
  headerOnLoginPage: boolean;
};

export default function Header({
  favoritesCount,
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
          {!headerOnLoginPage && <Navigation favoritesCount={favoritesCount} />}
        </div>
      </div>
    </header>
  );
}
