import { ReactNode, useState } from 'react';
import { ProjectsSectionModalInfo } from '../components/projectsSection/ProjectsSectionModal';
import globalContext from './globalContext';
import useViewport from './useViewport';
import { NavBarSections } from './useVisible';

export default function GlobalProvider({ children }: { children: ReactNode }) {
  const [projectsSectionModalInfo, setProjectsSectionModalInfo] = useState<
    ProjectsSectionModalInfo | undefined
  >(undefined);

  const [navBarCurrentSection, changeNavBarCurrentSection] =
    useState<NavBarSections>('home');

  const { width } = useViewport();

  return (
    <globalContext.Provider
      value={{
        width,
        projectsSectionModalInfo,
        setProjectsSectionModalInfo,
        navBarCurrentSection,
        changeNavBarCurrentSection,
      }}
    >
      {children}
    </globalContext.Provider>
  );
}
