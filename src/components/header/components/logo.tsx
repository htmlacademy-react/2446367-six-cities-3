import { Link } from 'react-router-dom';

import { AppRoute } from '../../../utils/data/data';

type LogoProps = {
  isLink: boolean;
};

export default function Logo({ isLink }: LogoProps) {
  const logoContent = (
    <img
      className="header__logo"
      src="img/logo.svg"
      alt="6 cities logo"
      width="81"
      height="41"
    />
  );

  const className = `header__logo-link${isLink ? '' : ' header__logo-link--active'}`;

  return isLink ? (
    <a className={className}>{logoContent}</a>
  ) : (
    <Link className={className} to={AppRoute.Root}>
      {logoContent}
    </Link>
  );
}
