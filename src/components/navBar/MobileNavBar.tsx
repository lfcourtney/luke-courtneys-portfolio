import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './MobileNavBar.module.scss';
import ScrollIntoView from 'react-scroll-into-view';

interface MobileNavBarProps {
  hamburgerOpen: boolean;
  hamburgerMenuComponent: React.ReactElement;
}

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
      <AnimatePresence initial={false}>
        {hamburgerOpen && (
          <motion.div
            key="mobileNavBarMenu"
            className={styles.mobileNavBarMenu}
            animate={{
              height: 225,
              transition: { duration: 0.5, type: 'spring', bounce: 0 },
            }}
            exit={{
              height: 0,
              transition: { duration: 0.5, type: 'spring', bounce: 0 },
            }}
          >
            <div className={styles.mobileNavBarMenuContainer}>
              <ul>
                <ScrollIntoView
                  selector="#openView"
                  style={{ display: 'inline' }}
                >
                  <li className={styles.mobileNavBarListItem}>HOME</li>
                </ScrollIntoView>
                <ScrollIntoView
                  selector="#aboutSection"
                  style={{ display: 'inline' }}
                >
                  <li className={styles.mobileNavBarListItem}>ABOUT</li>
                </ScrollIntoView>
                <ScrollIntoView
                  selector="#projectsSection"
                  style={{ display: 'inline' }}
                >
                  <li className={styles.mobileNavBarListItem}>PROJECTS</li>
                </ScrollIntoView>
                <ScrollIntoView
                  selector="#experienceSection"
                  style={{ display: 'inline' }}
                >
                  <li className={styles.mobileNavBarListItem}>EXPERIENCE</li>
                </ScrollIntoView>
                <ScrollIntoView
                  selector="#contactSection"
                  style={{ display: 'inline' }}
                >
                  <li className={styles.mobileNavBarListItem}>CONTACT</li>
                </ScrollIntoView>
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
