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
import { useAppDispatch } from './hooks/store';
import { useEffect } from 'react';
import { fetchAllOffers } from './store/thunks/offers';

type AppScreenProps = {
  favoritesCount: number;
};

export default function App({ favoritesCount }: AppScreenProps) {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchAllOffers());
  }, [dispatch]);
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
          <Route index element={<MainPage />} />
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
                <FavoritesPage favoritesCount={favoritesCount} />
              </PrivateRoute>
            }
          />
          <Route
            path={AppRoute.Offer}
            element={
              <OfferPage
                authorizationStatus={userAuthorization}
              />
            }
          />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
