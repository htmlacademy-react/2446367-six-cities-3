import { useLocation } from 'react-router-dom';
import { useMemo } from 'react';

import { AppRoute } from '../utils/data';

type usePageLayoutProps = {
  favoritesLength?: number;
  offersLength?: number;
};

export function usePageLayout({
  favoritesLength,
  offersLength,
}: usePageLayoutProps) {
  const { pathname } = useLocation();

  const layoutState = useMemo(() => {
    const state = {
      rootClassName: '',
      emptyFavorites: false,
      onFavoritesPage: false,
      emptyMain: false,
      emptyPageContainerClassName: '',
      headerOnMainPage: false,
      headerOnLoginPage: false,
      mainClassName: '',
    };

    switch (pathname as AppRoute) {
      case AppRoute.Root:
        state.rootClassName = ' page--gray page--main';
        state.headerOnMainPage = true;
        state.mainClassName = ' page__main--index';

        if (offersLength === 0) {
          state.emptyMain = true;
          state.mainClassName = ' page__main--index page__main--index-empty';
          state.emptyPageContainerClassName =
            ' cities__places-container--empty';
        }
        break;

      case AppRoute.Login:
        state.rootClassName = ' page--gray page--login';
        state.mainClassName = ' page__main--login';
        state.headerOnLoginPage = true;
        break;

      case AppRoute.Favorites:
        state.mainClassName = ' page__main--favorites';
        state.onFavoritesPage = true;

        if (favoritesLength === 0) {
          state.emptyFavorites = true;
          state.mainClassName = ' page__main--favorites-empty';
          state.rootClassName = ' page--favorites-empty';
        }
        break;

      case AppRoute.Offer:
        state.mainClassName = ' page__main--offer';
        break;
    }

    return state;
  }, [pathname, favoritesLength, offersLength]);

  return layoutState;
}
