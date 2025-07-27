import globalContext from './globalContext';
import { useEffect, useContext } from 'react';

/**
 * Hook used in conjunction with 'ProjectsSectionModal' component. Adjusts
 * the document body such that scroll is disabled and the modal can thus fill up the entire screen.
 */
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
