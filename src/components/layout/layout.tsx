import { PropsWithChildren } from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';
import { Page } from '../../data';

type LayoutProps = {
  currentPage: string;
  favoritesCount: number;
}

type divClassName = {
  [key: string]: string;
  'main': string;
  'offer': string;
  'favorites': string;
  'login': string;
}

const pageDivLayoutClassName: divClassName = {
  'main': 'page page--gray page--main',
  'offer': 'page',
  'favorites': 'page',
  'login': 'page page--gray page--login',
};

export default function Layout({currentPage, favoritesCount, children}: PropsWithChildren<LayoutProps>) {
  return (
    <div className={pageDivLayoutClassName[currentPage]}>
      <Header currentPage={currentPage} favoritesCount={favoritesCount} />
      {children}
      {currentPage === Page.Favorites && <Footer />}
    </div>
  );
}
