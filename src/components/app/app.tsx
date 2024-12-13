import { Route, BrowserRouter, Routes } from 'react-router-dom';
import FavoritesPage from '../../pages/favorites-page/favorites-page';
import LoginPage from '../../pages/login-page/login-page';
import MainPage from '../../pages/main-page/main-page';
import OfferPage from '../../pages/offer-page/offer-page';
import Layout from '../layout/layout';
import { AppRoute } from '../../data';
import NotFoundPage from '../../pages/not-found-page/not-found-page';

type AppOffersProps = {
  offersCount: number;
  favoritesCount: number;
};

export default function App({ offersCount, favoritesCount }: AppOffersProps) {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Root}
          element={
            <Layout favoritesCount={favoritesCount} />
          }
        >
          <Route
            index
            element={<MainPage offersCount={offersCount} />}
          />
          <Route
            path={AppRoute.Login}
            element={<LoginPage />}
          />
          <Route
            path={AppRoute.Favorites}
            element={<FavoritesPage favoritesCount={favoritesCount} />}
          />
          <Route
            path={AppRoute.Offer}
            element={<OfferPage />}
          />
          <Route
            path='*'
            element={<NotFoundPage />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
