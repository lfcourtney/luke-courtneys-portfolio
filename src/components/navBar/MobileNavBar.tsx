import React from 'react';
import { motion, Variants } from 'framer-motion';
import styles from './MobileNavBar.module.scss';

interface MobileNavBarProps {
  hamburgerOpen: boolean;
  hamburgerMenuComponent: React.ReactElement;
}

const hamburgerItemVariants: Variants = {
  open: {
    height: 225,
    transition: { duration: 0.5, type: 'spring', bounce: 0 },
  },
  closed: {
    height: 0,
    transition: { duration: 0.5, type: 'spring', bounce: 0 },
  },
};

export default function MobileNavBar({
  hamburgerOpen,
  hamburgerMenuComponent,
}: MobileNavBarProps) {
  return (
    <div className={styles.mobileNavBar}>
      <div className={styles.mobileNavBarHamburgerContainer}>
        {hamburgerMenuComponent}
        <div className={styles.mobileNavBarFooter}></div>
      </div>
      <motion.div
        className={styles.mobileNavBarMenu}
        initial={false}
        animate={hamburgerOpen ? 'open' : 'closed'}
        variants={hamburgerItemVariants}
      >
        <div className={styles.mobileNavBarMenuContainer}>
          <ul>
            <li className={styles.mobileNavBarListItem}>HOME</li>
            <li className={styles.mobileNavBarListItem}>ABOUT</li>
            <li className={styles.mobileNavBarListItem}>PROJECTS</li>
            <li className={styles.mobileNavBarListItem}>ABILITIES</li>
            <li className={styles.mobileNavBarListItem}>CONTACT</li>
          </ul>
        </div>
      </motion.div>
    </div>
  );
}
