import { usePageLayout } from '../../hooks/use-page-layout';
import { useAppSelector } from '../../hooks/store';

import { Header } from '../header/header';
import { Footer } from '../footer/footer';

import { Outlet } from 'react-router-dom';
import { useFavoriteCount } from '../../hooks/use-favorite-count';
import { selectCityOffers } from '../../store/selectors/offers';

function BaseLayout() {
  const offers = useAppSelector(selectCityOffers);
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

export const Layout = BaseLayout;
