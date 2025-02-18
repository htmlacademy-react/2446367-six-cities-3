import { memo } from 'react';
import { Link } from 'react-router-dom';

import { AppRoute } from '../../utils/data';

function BaseFooter() {
  return (
    <footer className="footer container">
      <Link className="footer__logo-link" to={AppRoute.Root}>
        <img
          className="footer__logo"
          src="img/logo.svg"
          alt="6 cities logo"
          width="64"
          height="33"
        />
      </Link>
    </footer>
  );
}

export const Footer = memo(BaseFooter);
