import './App.scss';
import OpenView from './components/openView/OpenView';
import NavBarDesktop from './components/navBar/DesktopNavBar';
import MobileNavBar from './components/navBar/MobileNavBar';
import useViewport from './hooks/useViewport';

const MOBILE_BREAKPOINT = 600;

function App() {
  const { width } = useViewport();

  return (
    <>
      <OpenView />
      {width > MOBILE_BREAKPOINT ? <NavBarDesktop /> : <MobileNavBar />}
      <div style={{ backgroundColor: 'lightgray', height: 3000 }} />
    </>
  );
}

export default App;
