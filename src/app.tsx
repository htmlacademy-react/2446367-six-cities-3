import { Route, BrowserRouter, Routes } from 'react-router-dom';
import FavoritesPage from './pages/favorites-page/favorites-page';
import LoginPage from './pages/login-page/login-page';
import MainPage from './pages/main-page/main-page';
import OfferPage from './pages/offer-page/offer-page';
import NotFoundPage from './pages/not-found-page/not-found-page';
import Layout from './components/layout/layout';
import { AppRoute } from './utils/data';
import { useActionCreators, useAppDispatch } from './hooks/store';
import { useEffect } from 'react';
import { fetchAllOffers } from './store/thunks/offers';
import { userActions } from './store/slices/user';
import { getToken } from './services/token';
import ProtectedRoute from './components/private-route/private-route';

type AppScreenProps = {
  favoritesCount: number;
};

export default function App({ favoritesCount }: AppScreenProps) {
  const dispatch = useAppDispatch();
  const { checkAuth } = useActionCreators(userActions);

  useEffect(() => {
    dispatch(fetchAllOffers());
  }, [dispatch]);

  const token = getToken();
  useEffect(() => {
    if (token) {
      checkAuth();
    }
  }, [token, checkAuth]);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Root}
          element={
            <Layout
              favoritesCount={favoritesCount}
            />
          }
        >
          <Route index element={<MainPage />} />
          <Route
            path={AppRoute.Login}
            element={
              <ProtectedRoute onlyUnAuth>
                <LoginPage />
              </ProtectedRoute>
            }
          />
          <Route
            path={AppRoute.Favorites}
            element={
              <ProtectedRoute>
                <FavoritesPage favoritesCount={favoritesCount} />
              </ProtectedRoute>
            }
          />
          <Route path={AppRoute.Offer} element={<OfferPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
