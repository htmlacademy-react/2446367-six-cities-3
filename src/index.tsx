import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';
import { Setting } from './mocks/mock-data';
import { Provider } from 'react-redux';
import { store } from './store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App
        favoritesCount={Setting.FavoritesCount}
      />
    </Provider>
  </React.StrictMode>,
);
