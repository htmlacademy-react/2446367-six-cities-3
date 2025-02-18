import { useAppSelector } from '../../hooks/store';
import { Navigate, useLocation } from 'react-router-dom';

import type { ReactNode } from 'react';
import type { Location } from 'react-router-dom';

import { AppRoute } from '../../utils/data';
import { userSelector } from '../../store/slices/user';

type ProtectedRouteProps = {
  children: ReactNode;
  onlyUnAuth?: boolean;
};

type FromState = {
  from?: Location;
};

function BaseProtectedRoute({ children, onlyUnAuth }: ProtectedRouteProps) {
  const location: Location<FromState> = useLocation() as Location<FromState>;

  const user = useAppSelector(userSelector.info);

  if (onlyUnAuth && user) {
    const from = location.state?.from || { pathname: AppRoute.Root };
    return <Navigate to={from} />;
  }

  if (!onlyUnAuth && !user) {
    return <Navigate state={{ from: location }} to={AppRoute.Login} />;
  }

  return children;
}

export const ProtectedRoute = BaseProtectedRoute;
