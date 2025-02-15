import { userSelector } from '../store/slices/user';
import { AuthorizationStatus } from '../utils/data';
import { useAppSelector } from './store';

export function useAuth() {
  const status = useAppSelector(userSelector.status);

  return status === AuthorizationStatus.Auth;
}
