import { AppRoute } from '../utils/data';
import { useLocation } from 'react-router-dom';
import { ServerOffer } from '../types/offer';

type usePageLayoutProps = {
  favoritesCount?: number;
  currentOffers: ServerOffer[];
};

export default function usePageLayout({
  favoritesCount,
  currentOffers,
}: usePageLayoutProps) {
  const { pathname } = useLocation();

  let rootClassName = '';
  let emptyFavorites = false;
  let onFavoritesPage = false;

  let emptyMain = false;
  let emptyPageContainerClassName = '';

  let headerOnMainPage = false;
  let headerOnLoginPage = false;

  let mainClassName = '';

  switch (pathname as AppRoute) {
    case AppRoute.Root:
      rootClassName = ' page--gray page--main';
      headerOnMainPage = true;
      mainClassName = ' page__main--index';

      if (currentOffers.length === 0) {
        emptyMain = true;
        mainClassName = ' page__main--index page__main--index-empty';
        emptyPageContainerClassName = ' cities__places-container--empty';
      }
      break;

    case AppRoute.Login:
      rootClassName = ' page--gray page--login';
      mainClassName = ' page__main--login';
      headerOnLoginPage = true;
      break;

    case AppRoute.Favorites:
      mainClassName = ' page__main--favorites';
      onFavoritesPage = true;

      if (favoritesCount === 0) {
        emptyFavorites = true;
        mainClassName = ' page__main--favorites-empty';
        rootClassName = ' page--favorites-empty';
      }
      break;

    case AppRoute.Offer:
      mainClassName = ' page__main--offer';
      break;
  }

  return {
    headerOnMainPage,
    headerOnLoginPage,
    rootClassName,
    emptyFavorites,
    onFavoritesPage,
    emptyMain,
    emptyPageContainerClassName,
    mainClassName,
  };
}
