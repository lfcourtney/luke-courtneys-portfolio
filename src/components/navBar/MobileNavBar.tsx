import { useState } from 'react';
import { useAnimate } from 'framer-motion';
import styles from './MobileNavBar.module.scss';

export default function MobileNavBar() {
  const [scope, animate] = useAnimate();
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const hamburgerClick = () => {
    setHamburgerOpen((isOpen) => !isOpen);
    if (!hamburgerOpen) {
      animate(
        scope.current,
        { height: 225 },
        { duration: 0.5, type: 'spring', bounce: 0 }
      );
      return;
    }
    animate(
      scope.current,
      { height: 0 },
      { duration: 0.5, type: 'spring', bounce: 0 }
    );
  };

  return (
    <>
      <div className={styles.mobileNavBar}>
        <div className={styles.mobileNavBarHamburgerContainer}>
          <i
            onClick={hamburgerClick}
            className={['fas', 'fa-bars', styles.hamburgerIcon].join(' ')}
          ></i>
          <div className={styles.mobileNavBarFooter}></div>
        </div>
        <div className={styles.mobileNavBarMenu} ref={scope}>
          <div className={styles.mobileNavBarMenuContainer}>
            <ul>
              <li className={styles.mobileNavBarListItem}>HOME</li>
              <li className={styles.mobileNavBarListItem}>ABOUT</li>
              <li className={styles.mobileNavBarListItem}>PROJECTS</li>
              <li className={styles.mobileNavBarListItem}>ABILITIES</li>
              <li className={styles.mobileNavBarListItem}>CONTACT</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
