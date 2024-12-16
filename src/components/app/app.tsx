import { Route, BrowserRouter, Routes } from 'react-router-dom';
import FavoritesPage from '../../pages/favorites-page/favorites-page';
import LoginPage from '../../pages/login-page/login-page';
import MainPage from '../../pages/main-page/main-page';
import OfferPage from '../../pages/offer-page/offer-page';
import Layout from '../layout/layout';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import PrivateRoute from '../private-route/private-route';
import { AppRoute } from '../../data';
import { userAuthorization } from '../../mocks/mock-data';

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
            <Layout favoritesCount={favoritesCount} authorizationStatus={userAuthorization} />
          }
        >
          <Route
            index
            element={<MainPage offersCount={offersCount} />}
          />
          <Route
            path={AppRoute.Login}
            element={(
              <PrivateRoute authorizationStatus={userAuthorization} isReverse>
                <LoginPage />
              </PrivateRoute>
            )}
            // element={<LoginPage />}
          />
          <Route
            path={AppRoute.Favorites}
            element={(
              <PrivateRoute authorizationStatus={userAuthorization}>
                <FavoritesPage favoritesCount={favoritesCount} />
              </PrivateRoute>
            )}
          />
          <Route
            path={AppRoute.Offer}
            element={<OfferPage authorizationStatus={userAuthorization} />}
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
