import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';
import { Setting } from './mocks/mock-data';
import { mockReviews } from './mocks/mock-reviews';
import { Provider } from 'react-redux';
import { store } from './store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App
        offersCount={Setting.OffersCount}
        favoritesCount={Setting.FavoritesCount}
        mockReviews={mockReviews}
      />
    </Provider>
  </React.StrictMode>,
);
