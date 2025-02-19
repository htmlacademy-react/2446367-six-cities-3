import { useEffect } from 'react';
import { useActionCreators } from './hooks/store';

import { ToastContainer } from 'react-toastify';

import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { FavoritesPage } from './pages/favorites-page/favorites-page';
import { LoginPage } from './pages/login-page/login-page';
import { MainPage } from './pages/main-page/main-page';
import { OfferPage } from './pages/offer-page/offer-page';
import { NotFoundPage } from './pages/not-found-page/not-found-page';
import { ProtectedRoute } from './components/private-route/private-route';
import { Layout } from './components/layout/layout';

import { AppRoute } from './utils/data';
import { userActions } from './store/slices/user';
import { getToken } from './services/token';
import { offersActions } from './store/slices/offers';

export function App() {
  const { fetchAllOffers } = useActionCreators(offersActions);
  const { checkAuth } = useActionCreators(userActions);

  useEffect(() => {
    fetchAllOffers().unwrap();
  }, [fetchAllOffers]);

  const token = getToken();
  useEffect(() => {
    if (token) {
      checkAuth();
    }
  }, [token, checkAuth]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Root} element={<Layout />}>
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
                <FavoritesPage />
              </ProtectedRoute>
            }
          />
          <Route path={AppRoute.Offer} element={<OfferPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
}
