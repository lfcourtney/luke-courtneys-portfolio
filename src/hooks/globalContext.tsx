import React from 'react';
import { NavBarSections } from './useVisible';
import { ProjectsSectionModalInfo } from '../components/projectsSection/ProjectsSectionModal';

const globalContext = React.createContext<{
  width: number;
  projectsSectionModalInfo?: ProjectsSectionModalInfo;
  setProjectsSectionModalInfo: React.Dispatch<
    React.SetStateAction<ProjectsSectionModalInfo | undefined>
  >;
  navBarCurrentSection: NavBarSections;
  changeNavBarCurrentSection: React.Dispatch<
    React.SetStateAction<NavBarSections>
  >;
}>({
  width: 0,
  projectsSectionModalInfo: undefined,
  setProjectsSectionModalInfo: () => {},
  navBarCurrentSection: 'home',
  changeNavBarCurrentSection: () => {},
});

export default globalContext;
