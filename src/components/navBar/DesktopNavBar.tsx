import styles from './DesktopNavBar.module.scss';
import ScrollIntoView from 'react-scroll-into-view';

export default function DesktopNavBar() {
  return (
    <div className={styles.desktopNavBar}>
      <div className={styles.desktopNavBarContainer}>
        <ul className={styles.desktopNavBarList}>
          <ScrollIntoView selector="#openView" style={{ display: 'inline' }}>
            <li className={styles.desktopNavBarListItem}>HOME</li>
          </ScrollIntoView>
          <ScrollIntoView
            selector="#aboutSection"
            style={{ display: 'inline' }}
          >
            <li className={styles.desktopNavBarListItem}>ABOUT</li>
          </ScrollIntoView>
          <ScrollIntoView
            selector="#projectsSection"
            style={{ display: 'inline' }}
          >
            <li className={styles.desktopNavBarListItem}>PROJECTS</li>
          </ScrollIntoView>
          <li className={styles.desktopNavBarListItem}>ABILITIES</li>
          <li className={styles.desktopNavBarListItem}>CONTACT</li>
        </ul>
      </div>
      <div className={styles.desktopNavBarFooter}></div>
    </div>
  );
}
