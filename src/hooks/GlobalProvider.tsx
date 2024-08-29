import { ReactNode, useState } from 'react';
import { ProjectsSectionModalInfo } from '../components/projectsSection/ProjectsSectionModal';
import globalContext from './globalContext';
import useViewport from './useViewport';

export default function GlobalProvider({ children }: { children: ReactNode }) {
  const [projectsSectionModalInfo, setProjectsSectionModalInfo] = useState<
    ProjectsSectionModalInfo | undefined
  >(undefined);

  const { width } = useViewport();

  return (
    <globalContext.Provider
      value={{ width, projectsSectionModalInfo, setProjectsSectionModalInfo }}
    >
      {children}
    </globalContext.Provider>
  );
}
