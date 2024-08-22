import './App.scss';
import ViewportProvider from './hooks/ViewportProvider/ViewportProvider';
import OpenView from './components/openView/OpenView';
import NavBar from './components/navBar/NavBar';
import AboutSection from './components/aboutSection/AboutSection';
import ProjectsSection from './components/projectsSection/ProjectsSection';

function App() {
  return (
    <ViewportProvider>
      <OpenView />
      <NavBar />
      <AboutSection />
      <ProjectsSection />
    </ViewportProvider>
  );
}

export default App;
