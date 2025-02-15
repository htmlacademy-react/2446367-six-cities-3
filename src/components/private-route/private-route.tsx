import { Navigate, useLocation } from 'react-router-dom';
import { AppRoute } from '../../utils/data';
import { ReactNode } from 'react';
import { useAppSelector } from '../../hooks/store';
import { userSelector } from '../../store/slices/user';
import { Location } from 'react-router-dom';

type ProtectedRouteProps = {
  children: ReactNode;
  onlyUnAuth?: boolean;
};

type FromState = {
  from?: Location;
};

export default function ProtectedRoute({
  children,
  onlyUnAuth,
}: ProtectedRouteProps) {
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
