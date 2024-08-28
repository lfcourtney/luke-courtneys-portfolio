import useModalOverflow from './hooks/useModal';
import OpenView from './components/openView/OpenView';
import NavBar from './components/navBar/NavBar';
import AboutSection from './components/aboutSection/AboutSection';
import ProjectsSection from './components/projectsSection/ProjectsSection';
import ProjectsSectionModal from './components/projectsSection/ProjectsSectionModal';

function App() {
  const { projectsSectionModalInfo } = useModalOverflow();

  return (
    <>
      <OpenView />
      <NavBar />
      <AboutSection />
      <ProjectsSection />
      {projectsSectionModalInfo && (
        <ProjectsSectionModal
          title={projectsSectionModalInfo.title}
          link={projectsSectionModalInfo.link}
          img={projectsSectionModalInfo.img}
          text={projectsSectionModalInfo.text}
        />
      )}
    </>
  );
}

export default App;
