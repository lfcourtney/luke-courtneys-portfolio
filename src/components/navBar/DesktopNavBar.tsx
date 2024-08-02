import styles from './DesktopNavBar.module.scss';

export default function NavBar() {
  return (
    <div className={styles.desktopNavBar}>
      <div className={styles.desktopNavBarContainer}>
        <ul className={styles.desktopNavBarList}>
          <li className={styles.desktopNavBarListItem}>HOME</li>
          <li className={styles.desktopNavBarListItem}>ABOUT</li>
          <li className={styles.desktopNavBarListItem}>PROJECTS</li>
          <li className={styles.desktopNavBarListItem}>ABILITIES</li>
          <li className={styles.desktopNavBarListItem}>CONTACT</li>
        </ul>
      </div>
      <div className={styles.desktopNavBarFooter}></div>
    </div>
  );
}
