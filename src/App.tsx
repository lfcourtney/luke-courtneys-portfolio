import './App.scss';
import OpenView from './components/openView/OpenView';
import NavBar from './components/navBar/NavBar';
import AboutSection from './components/aboutSection/AboutSection';

function App() {
  return (
    <>
      <OpenView />
      <NavBar />
      <AboutSection />
      <div style={{ backgroundColor: 'lightgray', height: 3000 }} />
    </>
  );
}

export default App;
