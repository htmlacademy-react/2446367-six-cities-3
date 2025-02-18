import usePageLayout from '../../hooks/use-page-layout';
import { useAppSelector } from '../../hooks/store';

import Header from '../header/header';
import { Footer } from '../footer/footer';

import { Outlet } from 'react-router-dom';
import { offersSelector } from '../../store/slices/offers';

export default function Layout() {
  const offers = useAppSelector(offersSelector.cityOffers);
  const offersLength = offers.length;

  const {
    headerOnMainPage,
    headerOnLoginPage,
    rootClassName,
    mainClassName,
    onFavoritesPage,
  } = usePageLayout({ offersLength });

  return (
    <div className={`page${rootClassName}`}>
      <Header
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
