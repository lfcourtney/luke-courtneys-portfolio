import { ReactNode, useEffect, useState } from 'react';
import globalContext from './globalContext';

export default function ViewportProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleWindowResize);
    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

  return (
    <globalContext.Provider value={{ width }}>
      {children}
    </globalContext.Provider>
  );
}
