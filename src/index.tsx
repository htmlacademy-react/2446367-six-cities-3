import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';
import { Setting } from './mocks/mock-data';
import { mockOffers } from './mocks/mock-offers';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    < App
      offersCount = {Setting.OffersCount}
      favoritesCount={Setting.FavoritesCount}
      mockOffers={mockOffers}
    />
  </React.StrictMode>
);
