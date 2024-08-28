import { useState, useContext } from 'react';
import globalContext from '../../hooks/globalContext';
import DesktopNavBar from './DesktopNavBar';
import MobileNavBar from './MobileNavBar';
import HamburgerMenu from './HamburgerMenu';

const MOBILE_BREAKPOINT: number = 600;

function NavBar() {
  const { width } = useContext(globalContext);
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const respondHamburgerClick = () => {
    setHamburgerOpen((isOpen) => !isOpen);
  };

  return (
    <>
      {width > MOBILE_BREAKPOINT ? (
        <DesktopNavBar />
      ) : (
        <MobileNavBar
          hamburgerOpen={hamburgerOpen}
          hamburgerMenuComponent={
            <HamburgerMenu
              onClick={respondHamburgerClick}
              hamburgerOpen={hamburgerOpen}
            />
          }
        />
      )}
    </>
  );
}

export default NavBar;
