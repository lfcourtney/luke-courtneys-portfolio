import { useState } from 'react';
import useViewport from '../../hooks/useViewport';
import DesktopNavBar from './DesktopNavBar';
import MobileNavBar from './MobileNavBar';

const MOBILE_BREAKPOINT = 600;

function NavBar() {
  const { width } = useViewport();
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
          respondHamburgerClick={respondHamburgerClick}
        />
      )}
    </>
  );
}

export default NavBar;
