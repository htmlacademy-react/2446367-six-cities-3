import Header from '../header/header';
import Footer from '../footer/footer';
import { AppRoute } from '../../data';
import { Outlet, useLocation } from 'react-router-dom';

type LayoutProps = {
  favoritesCount: number;
};


const createPageLayout = (pathname: AppRoute) => {
  let rootClassName = '';

  if (pathname === AppRoute.Root) {
    rootClassName = ' page--gray page--main';
  }
  if (pathname === AppRoute.Login) {
    rootClassName = ' page--gray page--login';
  }

  return { rootClassName };
};

export default function Layout({ favoritesCount }: LayoutProps) {
  const { pathname } = useLocation();
  const { rootClassName } = createPageLayout(pathname as AppRoute);
  return (
    <div className={`page${rootClassName}`}>
      <Header pathname={pathname as AppRoute} favoritesCount={favoritesCount} />
      <Outlet />
      {pathname as AppRoute === AppRoute.Favorites && <Footer />}
    </div>
  );
}
