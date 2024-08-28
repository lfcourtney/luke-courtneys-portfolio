import './App.scss';
import GlobalProvider from './hooks/GlobalProvider';
import OpenView from './components/openView/OpenView';
import NavBar from './components/navBar/NavBar';
import AboutSection from './components/aboutSection/AboutSection';
import ProjectsSection from './components/projectsSection/ProjectsSection';

function App() {
  return (
    <GlobalProvider>
      <OpenView />
      <NavBar />
      <AboutSection />
      <ProjectsSection />
    </GlobalProvider>
  );
}

export default App;
