import { useAppSelector } from './store';

import { selectUserStatus } from '../store/selectors/user';
import { AuthorizationStatus } from '../utils/data/data';

export function useAuth() {
  const status = useAppSelector(selectUserStatus);

  return status === AuthorizationStatus.Auth;
}
