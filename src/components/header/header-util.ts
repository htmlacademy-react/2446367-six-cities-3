import { AppRoute } from '../../data';

export const createHeader = (pathname: AppRoute) => {
  let headerLinkClassName = '';
  let headerOnMainPage = false;
  let headerOnLoginPage = false;

  if (pathname === AppRoute.Root) {
    headerLinkClassName = 'header__logo-link--active';
    headerOnMainPage = true;
  }

  if (pathname === AppRoute.Login) {
    headerOnLoginPage = true;
  }

  return { headerLinkClassName, headerOnMainPage, headerOnLoginPage };
};
