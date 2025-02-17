import { AppRoute } from '../utils/data';
import { useLocation } from 'react-router-dom';
import { ServerOffer } from '../types/offer';

type usePageLayoutProps = {
  favorites?: ServerOffer[];
  offers?: ServerOffer[];
};

export default function usePageLayout({
  favorites,
  offers,
}: usePageLayoutProps) {
  const { pathname } = useLocation();

  const layoutState = {
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
      layoutState.rootClassName = ' page--gray page--main';
      layoutState.headerOnMainPage = true;
      layoutState.mainClassName = ' page__main--index';

      if (offers?.length === 0) {
        layoutState.emptyMain = true;
        layoutState.mainClassName =
          ' page__main--index page__main--index-empty';
        layoutState.emptyPageContainerClassName =
          ' cities__places-container--empty';
      }
      break;

    case AppRoute.Login:
      layoutState.rootClassName = ' page--gray page--login';
      layoutState.mainClassName = ' page__main--login';
      layoutState.headerOnLoginPage = true;
      break;

    case AppRoute.Favorites:
      layoutState.mainClassName = ' page__main--favorites';
      layoutState.onFavoritesPage = true;

      if (favorites?.length === 0) {
        layoutState.emptyFavorites = true;
        layoutState.mainClassName = ' page__main--favorites-empty';
        layoutState.rootClassName = ' page--favorites-empty';
      }
      break;

    case AppRoute.Offer:
      layoutState.mainClassName = ' page__main--offer';
      break;
  }

  return layoutState;
}
