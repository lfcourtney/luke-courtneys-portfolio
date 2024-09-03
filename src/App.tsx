import useModalOverflow from './hooks/useModal';
import OpenView from './components/openView/OpenView';
import NavBar from './components/navBar/NavBar';
import AboutSection from './components/aboutSection/AboutSection';
import ProjectsSection from './components/projectsSection/ProjectsSection';
import ProjectsSectionModal from './components/projectsSection/ProjectsSectionModal';
import ExperienceSection from './components/experienceSection/ExperienceSection';
import ContactSection from './components/contactSection/ContactSection';
import FooterSection from './components/footerSection/FooterSection';

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
      <ContactSection />
      <FooterSection />
    </>
  );
}

export default App;
