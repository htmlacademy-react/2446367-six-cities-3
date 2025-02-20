import { useContext } from 'react';
import { OffersContext } from '../contexts/offers-context';

export function useOffers() {
  return useContext(OffersContext);
}
