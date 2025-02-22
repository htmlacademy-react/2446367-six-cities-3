import { createContext, memo } from 'react';

import type { ReactNode } from 'react';
import type { ServerOffer } from '../types/offer';

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

const OffersProvider = memo(BaseOffersProvider);

export default OffersProvider;
