import { useEffect } from 'react';
import { useActionCreators, useAppSelector } from './store';

import { favoritesActions } from '../store/slices/favorites';
import { RequestStatus } from '../utils/data';
import {
  selectFavorites,
  selectFavoriteStatus,
} from '../store/selectors/favorites';

export function useFavoriteCount() {
  const status = useAppSelector(selectFavoriteStatus);
  const count = useAppSelector(selectFavorites).length;
  const { fetchFavorites } = useActionCreators(favoritesActions);

  useEffect(() => {
    if (status === RequestStatus.Idle) {
      fetchFavorites();
    }
  }, [status, fetchFavorites]);

  return count;
}
