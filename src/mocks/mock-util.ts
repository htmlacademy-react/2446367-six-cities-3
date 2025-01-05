import { AuthorizationStatus } from '../utils/data';

export const isUserLogged = (logged: AuthorizationStatus) => logged === AuthorizationStatus.Auth;
