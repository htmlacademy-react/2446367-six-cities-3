import { Route, BrowserRouter, Routes } from 'react-router-dom';
import FavoritesPage from './pages/favorites-page/favorites-page';
import LoginPage from './pages/login-page/login-page';
import MainPage from './pages/main-page/main-page';
import OfferPage from './pages/offer-page/offer-page';
import NotFoundPage from './pages/not-found-page/not-found-page';
import Layout from './components/layout/layout';
import PrivateRoute from './components/private-route/private-route';
import { AppRoute } from './utils/data';
import { userAuthorization } from './mocks/mock-data';
import { Offers } from './mocks/mock-types/offers';

type AppScreenProps = {
  offersCount: number;
  favoritesCount: number;
  mockOffers: Offers;
};

export default function App({
  offersCount,
  favoritesCount,
  mockOffers,
}: AppScreenProps) {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Root}
          element={
            <Layout
              favoritesCount={favoritesCount}
              authorizationStatus={userAuthorization}
            />
          }
        >
          <Route
            index
            element={
              <MainPage offersCount={offersCount} mockOffers={mockOffers} />
            }
          />
          <Route
            path={AppRoute.Login}
            element={
              <PrivateRoute authorizationStatus={userAuthorization} isReverse>
                <LoginPage />
              </PrivateRoute>
            }
          />
          <Route
            path={AppRoute.Favorites}
            element={
              <PrivateRoute authorizationStatus={userAuthorization}>
                <FavoritesPage
                  favoritesCount={favoritesCount}
                  mockOffers={mockOffers}
                />
              </PrivateRoute>
            }
          />
          <Route
            path={AppRoute.Offer}
            element={<OfferPage authorizationStatus={userAuthorization} mockOffers={mockOffers} />}
          />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
