import { AppRoute } from '../../utils/data';
import { useLocation } from 'react-router-dom';

type usePageLayoutProps = {
  favoritesCount?: number;
  offersCount?: number;
};

export default function usePageLayout({ favoritesCount, offersCount }: usePageLayoutProps) {
  const { pathname } = useLocation();

  let rootClassName = '';
  let emptyFavorites = false;
  let emptyFavoritesMainClassName = '';

  const headerOnMainPage = (pathname as AppRoute) === AppRoute.Root;
  const headerOnLoginPage = (pathname as AppRoute) === AppRoute.Login;

  if (favoritesCount === 0) {
    emptyFavorites = true;
    emptyFavoritesMainClassName = 'page__main--favorites-empty';
  }

  if ((pathname as AppRoute) === AppRoute.Root) {
    rootClassName = ' page--gray page--main';
  }
  if ((pathname as AppRoute) === AppRoute.Login) {
    rootClassName = ' page--gray page--login';
  }

  let emptyMain = false;
  let emptyPageMainClassName = '';
  let emptyPageContainerClassName = '';

  if (offersCount === 0) {
    emptyMain = true;
    emptyPageMainClassName = 'page__main--index-empty';
    emptyPageContainerClassName = 'cities__places-container--empty';
  }

  return {
    pathname,
    headerOnMainPage,
    headerOnLoginPage,
    rootClassName,
    emptyFavorites,
    emptyFavoritesMainClassName,
    emptyMain,
    emptyPageMainClassName,
    emptyPageContainerClassName,
  };
}
