import { useEffect, useState } from 'react';

/**
 * Step outside of React in order to add an event listener so that the application can respond to changes in the width of the viewport
 */
export default function useViewport() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleWindowResize);
    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

  return { width };
}
