import React from 'react';
import styles from './OpenView.module.scss';
import ScrollIntoView from 'react-scroll-into-view';

const OpenView = (): React.JSX.Element => {
  return (
    <div className={styles.container} id="openView">
      <div className={styles.containerChild}>
        <h1 className={styles.header}>Luke Courtney</h1>
        <hr className={styles.horizontalRule} />
        <h2 className={styles.subHeader}>Portfolio</h2>
        <ScrollIntoView selector="#aboutSection" style={{ display: 'inline' }}>
          <i
            className={['fas', 'fa-chevron-down', styles.chevronDown].join(' ')}
          ></i>
        </ScrollIntoView>
      </div>
    </div>
  );
};

export default OpenView;
