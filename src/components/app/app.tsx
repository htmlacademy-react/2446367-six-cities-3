import MainPage from '../../pages/main-page/main-page';

type AppOffersProps = {
  offersCount: number;
}

export function App({offersCount}: AppOffersProps): JSX.Element {
  return (
    < MainPage offersCount={offersCount}/>
  );
}
