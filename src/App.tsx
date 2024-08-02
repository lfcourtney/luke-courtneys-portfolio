import './App.scss';
import OpenView from './components/openView/OpenView';
import NavBar from './components/navBar/NavBar';

function App() {
  return (
    <>
      <OpenView />
      <NavBar />
      <div style={{ backgroundColor: 'lightgray', height: 3000 }} />
    </>
  );
}

export default App;
