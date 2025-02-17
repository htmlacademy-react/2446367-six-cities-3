import { useEffect } from 'react';
import { useActionCreators, useAppSelector } from './store';

import { favoritesActions, favoritesSelector } from '../store/slices/favorites';
import { RequestStatus } from '../utils/data';

export default function useFavoriteCount() {
  const status = useAppSelector(favoritesSelector.status);
  const count = useAppSelector(favoritesSelector.favorites).length;
  const { fetchFavorites } = useActionCreators(favoritesActions);

  useEffect(() => {
    if (status === RequestStatus.Idle) {
      fetchFavorites();
    }
  }, [status, fetchFavorites]);

  return count;
}
