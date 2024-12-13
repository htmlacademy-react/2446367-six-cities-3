import FavoritesPage from '../../pages/favorites-page/favorites-page';
import LoginPage from '../../pages/login-page/login-page';
import MainPage from '../../pages/main-page/main-page';
import OfferPage from '../../pages/offer-page/offer-page';
import Layout from '../layout/layout';
import { Page } from '../../data';

type AppOffersProps = {
  offersCount: number;
  favoritesCount: number;
};

const currentPage = Page.Main;

const getPage = (offersCount: number, favoritesCount: number) => {
  switch (currentPage) {
    case Page.Main:
      return <MainPage offersCount={offersCount} />;
    case Page.Login:
      return <LoginPage />;
    case Page.Favorites:
      return <FavoritesPage favoritesCount={favoritesCount} />;
    case Page.Offer:
      return <OfferPage />;
    default:
      return null;
  }
};

export default function App({ offersCount, favoritesCount }: AppOffersProps) {
  return (
    <Layout currentPage={currentPage} favoritesCount={favoritesCount}>
      {getPage(offersCount, favoritesCount)}
    </Layout>
  );
}
