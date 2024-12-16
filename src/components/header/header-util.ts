import { AppRoute } from '../../data';

export const createHeader = (pathname: AppRoute) => {
  const headerOnMainPage = pathname === AppRoute.Root;
  const headerOnLoginPage = pathname === AppRoute.Login;

  return { headerOnMainPage, headerOnLoginPage };
};
