import { useEffect } from 'react';
import { useActionCreators, useAppSelector } from './hooks/store';

import { ToastContainer } from 'react-toastify';

import { Route, BrowserRouter, Routes } from 'react-router-dom';
import FavoritesPage from './pages/favorites-page/favorites-page';
import LoginPage from './pages/login-page/login-page';
import MainPage from './pages/main-page/main-page';
import OfferPage from './pages/offer-page/offer-page';
import NotFoundPage from './pages/not-found-page/not-found-page';
import ProtectedRoute from './components/private-route/private-route';
import OffersProvider from './contexts/offers-context';
import Layout from './components/layout/layout';

import { AppRoute } from './utils/data/data';
import { userActions } from './store/slices/user/user';
import { offersActions } from './store/slices/offers/offers';
import { selectCityOffers } from './store/selectors/offers';

import { getToken } from './services/token';

export default function App() {
  const { fetchAllOffers } = useActionCreators(offersActions);
  const { checkAuth } = useActionCreators(userActions);

  const offers = useAppSelector(selectCityOffers);

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
    <OffersProvider offers={offers}>
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
    </OffersProvider>
  );
}
