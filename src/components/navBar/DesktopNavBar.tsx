import styles from './DesktopNavBar.module.scss';
import ScrollIntoView from 'react-scroll-into-view';
import globalContext from '../../hooks/globalContext';
import { useContext } from 'react';

export default function DesktopNavBar() {
  const { navBarCurrentSection } = useContext(globalContext);

  return (
    <div className={styles.desktopNavBar}>
      <div className={styles.desktopNavBarContainer}>
        <ul className={styles.desktopNavBarList}>
          <ScrollIntoView selector="#openView" style={{ display: 'inline' }}>
            <li
              className={styles.desktopNavBarListItem}
              style={{
                color: navBarCurrentSection === 'home' ? '#b91c5f' : '',
              }}
            >
              HOME
            </li>
          </ScrollIntoView>
          <ScrollIntoView
            selector="#aboutSection"
            style={{ display: 'inline' }}
          >
            <li
              className={styles.desktopNavBarListItem}
              style={{
                color: navBarCurrentSection === 'about' ? '#b91c5f' : '',
              }}
            >
              ABOUT
            </li>
          </ScrollIntoView>
          <ScrollIntoView
            selector="#projectsSection"
            style={{ display: 'inline' }}
          >
            <li
              className={styles.desktopNavBarListItem}
              style={{
                color: navBarCurrentSection === 'projects' ? '#b91c5f' : '',
              }}
            >
              PROJECTS
            </li>
          </ScrollIntoView>
          <ScrollIntoView
            selector="#experienceSection"
            style={{ display: 'inline' }}
          >
            <li
              className={styles.desktopNavBarListItem}
              style={{
                color: navBarCurrentSection === 'experience' ? '#b91c5f' : '',
              }}
            >
              EXPERIENCE
            </li>
          </ScrollIntoView>
          <ScrollIntoView
            selector="#contactSection"
            style={{ display: 'inline' }}
          >
            <li
              className={styles.desktopNavBarListItem}
              style={{
                color: navBarCurrentSection === 'contact' ? '#b91c5f' : '',
              }}
            >
              CONTACT
            </li>
          </ScrollIntoView>
        </ul>
      </div>
      <div className={styles.desktopNavBarFooter}></div>
    </div>
  );
}
