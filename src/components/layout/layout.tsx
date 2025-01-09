import Header from '../header/header';
import Footer from '../footer/footer';
import { AuthorizationStatus } from '../../utils/data';
import { Outlet } from 'react-router-dom';
import usePageLayout from '../../hooks/use-page-layout';

type LayoutProps = {
  favoritesCount: number;
  offersCount: number;
  authorizationStatus: AuthorizationStatus;
};

export default function Layout({
  favoritesCount,
  offersCount,
  authorizationStatus,
}: LayoutProps) {
  const {
    headerOnMainPage,
    headerOnLoginPage,
    rootClassName,
    mainClassName,
    onFavoritesPage,
  } = usePageLayout({ favoritesCount, offersCount });

  return (
    <div className={`page${rootClassName}`}>
      <Header
        favoritesCount={favoritesCount}
        authorizationStatus={authorizationStatus}
        headerOnMainPage={headerOnMainPage}
        headerOnLoginPage={headerOnLoginPage}
      />
      <main className={`page__main${mainClassName}`}>
        <Outlet />
      </main>
      {onFavoritesPage && <Footer />}
    </div>
  );
}
