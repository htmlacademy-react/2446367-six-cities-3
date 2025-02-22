import { createContext } from 'react';

import type { ReactNode } from 'react';
import type { ServerOffer } from '../types/offer';

export const OffersContext = createContext<ServerOffer[]>([]);

type OffersProviderProps = {
  children: ReactNode;
  offers: ServerOffer[];
};

export default function OffersProvider({
  children,
  offers,
}: OffersProviderProps) {
  return (
    <OffersContext.Provider value={offers}>{children}</OffersContext.Provider>
  );
}
