import usePageLayout from '../../hooks/use-page-layout';
import { useAppSelector } from '../../hooks/store';

import Header from '../header/header';
import Footer from '../footer/footer';

import { Outlet } from 'react-router-dom';
import { AuthorizationStatus } from '../../utils/data';
import { offersSelectors } from '../../store/slices/offers';

type LayoutProps = {
  favoritesCount: number;
  authorizationStatus: AuthorizationStatus;
};

export default function Layout({
  favoritesCount,
  authorizationStatus,
}: LayoutProps) {
  const currentOffers = useAppSelector(offersSelectors.cityOffers);
  const {
    headerOnMainPage,
    headerOnLoginPage,
    rootClassName,
    mainClassName,
    onFavoritesPage,
  } = usePageLayout({ favoritesCount, currentOffers });

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
