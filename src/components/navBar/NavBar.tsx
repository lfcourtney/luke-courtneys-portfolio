import { useState } from 'react';
import useViewport from '../../hooks/useViewport';
import DesktopNavBar from './DesktopNavBar';
import MobileNavBar from './MobileNavBar';
import HamburgerMenu from './HamburgerMenu';

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
