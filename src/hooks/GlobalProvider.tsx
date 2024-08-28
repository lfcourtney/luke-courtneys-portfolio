import { ReactNode } from 'react';
import globalContext from './globalContext';
import useViewport from './useViewport';

export default function GlobalProvider({ children }: { children: ReactNode }) {
  const { width } = useViewport();

  return (
    <globalContext.Provider value={{ width }}>
      {children}
    </globalContext.Provider>
  );
}
