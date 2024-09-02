import useModalOverflow from './hooks/useModal';
import OpenView from './components/openView/OpenView';
import NavBar from './components/navBar/NavBar';
import AboutSection from './components/aboutSection/AboutSection';
import ProjectsSection from './components/projectsSection/ProjectsSection';
import ProjectsSectionModal from './components/projectsSection/ProjectsSectionModal';
import ExperienceSection from './components/experienceSection/ExperienceSection';

function App() {
  useModalOverflow();

  return (
    <>
      <OpenView />
      <NavBar />
      <AboutSection />
      <ProjectsSection />
      <ExperienceSection />
      <ProjectsSectionModal />
    </>
  );
}

export default App;
