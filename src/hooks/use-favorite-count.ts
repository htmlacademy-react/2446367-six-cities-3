import { useEffect } from 'react';
import { useActionCreators, useAppSelector } from './store';

import { favoritesActions } from '../store/slices/favorites';
import { RequestStatus } from '../utils/data';
import {
  selectFavorites,
  selectFavoriteStatus,
} from '../store/selectors/favorites';
import { useAuth } from './user-authorization';

export function useFavoriteCount() {
  const status = useAppSelector(selectFavoriteStatus);
  const count = useAppSelector(selectFavorites).length;

  const { fetchFavorites } = useActionCreators(favoritesActions);
  const isAuthorized = useAuth();

  useEffect(() => {
    if (isAuthorized && status === RequestStatus.Idle) {
      fetchFavorites();
    }
  }, [status, isAuthorized, fetchFavorites]);

  return isAuthorized ? count : 0;
}
