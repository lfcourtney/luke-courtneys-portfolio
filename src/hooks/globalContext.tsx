import React from 'react';
import { ProjectsSectionModalProps } from '../components/projectsSection/ProjectsSectionModal';

const globalContext = React.createContext<{
  width: number;
  projectsSectionModalInfo?: ProjectsSectionModalProps;
  setProjectsSectionModalInfo: React.Dispatch<
    React.SetStateAction<ProjectsSectionModalProps | undefined>
  >;
}>({
  width: 0,
  projectsSectionModalInfo: undefined,
  setProjectsSectionModalInfo: () => {},
});

export default globalContext;
