import { memo } from 'react';

import { Link } from 'react-router-dom';

import { AppRoute } from '../../../utils/data/data';

type LogoProps = {
  isLink: boolean;
};

function BaseLogo({ isLink }: LogoProps) {
  return isLink ? (
    <a className="header__logo-link">
      <img
        className="header__logo"
        src="img/logo.svg"
        alt="6 cities logo"
        width="81"
        height="41"
      />
    </a>
  ) : (
    <Link
      className="header__logo-link header__logo-link--active"
      to={AppRoute.Root}
    >
      <img
        className="header__logo"
        src="img/logo.svg"
        alt="6 cities logo"
        width="81"
        height="41"
      />
    </Link>
  );
}

const Logo = memo(BaseLogo);

export default Logo;
