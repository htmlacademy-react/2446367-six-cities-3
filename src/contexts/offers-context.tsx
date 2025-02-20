import { createContext, memo, ReactNode } from 'react';
import { ServerOffer } from '../types/offer';

export const OffersContext = createContext<ServerOffer[]>([]);

type OffersProviderProps = {
  children: ReactNode;
  offers: ServerOffer[];
};

function BaseOffersProvider({ children, offers }: OffersProviderProps) {
  return (
    <OffersContext.Provider value={offers}>{children}</OffersContext.Provider>
  );
}

export const OffersProvider = memo(BaseOffersProvider);
