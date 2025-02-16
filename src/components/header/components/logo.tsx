import { Link } from 'react-router-dom';
import { AppRoute } from '../../../utils/data';

type LogoProps = {
  isLink: boolean;
};

export default function Logo({ isLink }: LogoProps) {
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
