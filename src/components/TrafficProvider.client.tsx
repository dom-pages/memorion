'use client';

import { createContext, ReactNode, useContext } from 'react';

export interface TrafficContextValue {
  isBlack: boolean;
}

export const TrafficContext = createContext<TrafficContextValue>({ isBlack: true });

interface Props {
  isBlack: boolean;
  children: ReactNode;
}

export default function TrafficProvider({ isBlack, children }: Props) {
  return (
    <TrafficContext.Provider value={{ isBlack }}>
      {children}
    </TrafficContext.Provider>
  );
}

export function useTraffic() {
  return useContext(TrafficContext);
} 