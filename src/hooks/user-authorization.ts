import { selectUserStatus } from '../store/selectors/user';
import { AuthorizationStatus } from '../utils/data/data';
import { useAppSelector } from './store';

export function useAuth() {
  const status = useAppSelector(selectUserStatus);

  return status === AuthorizationStatus.Auth;
}
