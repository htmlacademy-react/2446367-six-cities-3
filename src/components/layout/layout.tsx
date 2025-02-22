import { useOffers } from '../../hooks/use-offers';
import { usePageLayout } from '../../hooks/use-page-layout';
import { useFavoriteCount } from '../../hooks/use-favorite-count';

import Header from '../header/header';
import Footer from '../footer/footer';
import { Outlet } from 'react-router-dom';

function BaseLayout() {
  const offers = useOffers();
  const offersLength = offers.length;

  const favoritesLength = useFavoriteCount();

  const {
    headerOnMainPage,
    headerOnLoginPage,
    rootClassName,
    mainClassName,
    onFavoritesPage,
  } = usePageLayout({ offersLength, favoritesLength });

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

const Layout = BaseLayout;

export default Layout;
