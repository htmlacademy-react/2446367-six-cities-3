import Header from '../header/header';
import Footer from '../footer/footer';
import { AppRoute, AuthorizationStatus } from '../../utils/data';
import { Outlet } from 'react-router-dom';
import usePageLayout from './use-page-layout';

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
    pathname,
    headerOnMainPage,
    headerOnLoginPage,
    rootClassName,
  } = usePageLayout({ favoritesCount, offersCount });

  return (
    <div className={`page${rootClassName}`}>
      <Header
        favoritesCount={favoritesCount}
        authorizationStatus={authorizationStatus}
        headerOnMainPage={headerOnMainPage}
        headerOnLoginPage={headerOnLoginPage}
      />
      <Outlet />
      {(pathname as AppRoute) === AppRoute.Favorites && <Footer />}
    </div>
  );
}
