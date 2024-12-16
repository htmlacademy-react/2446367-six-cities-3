import { AuthorizationStatus } from '../data';

export const isUserLogged = (logged: AuthorizationStatus) => logged === AuthorizationStatus.Auth;
