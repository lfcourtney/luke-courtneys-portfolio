import React from 'react';
import { ProjectsSectionModalInfo } from '../components/projectsSection/ProjectsSectionModal';

const globalContext = React.createContext<{
  width: number;
  projectsSectionModalInfo?: ProjectsSectionModalInfo;
  setProjectsSectionModalInfo: React.Dispatch<
    React.SetStateAction<ProjectsSectionModalInfo | undefined>
  >;
}>({
  width: 0,
  projectsSectionModalInfo: undefined,
  setProjectsSectionModalInfo: () => {},
});

export default globalContext;
