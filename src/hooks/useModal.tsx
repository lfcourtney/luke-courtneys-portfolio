import globalContext from './globalContext';
import { useEffect, useContext } from 'react';

export default function useModalOverflow() {
  const { projectsSectionModalInfo } = useContext(globalContext);

  useEffect(() => {
    if (projectsSectionModalInfo) {
      document.body.style.overflow = 'hidden';
      return;
    }

    document.body.style.overflow = '';
  }, [projectsSectionModalInfo]);

  return { projectsSectionModalInfo };
}
