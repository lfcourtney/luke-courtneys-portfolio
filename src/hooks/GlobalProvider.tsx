import { ReactNode, useState } from 'react';
import { ProjectsSectionModalProps } from '../components/projectsSection/ProjectsSectionModal';
import globalContext from './globalContext';
import useViewport from './useViewport';

export default function GlobalProvider({ children }: { children: ReactNode }) {
  const [projectsSectionModalInfo, setProjectsSectionModalInfo] = useState<
    ProjectsSectionModalProps | undefined
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
