import React from 'react';
import styles from './OpenView.module.scss';
import ScrollIntoView from 'react-scroll-into-view';

const OpenView = (): React.JSX.Element => {
  return (
    <div className={styles.container}>
      <div className={styles.containerChild}>
        <h1 className={styles.header}>Luke Courtney</h1>
        <hr className={styles.horizontalRule} />
        <p className={styles.subHeader}>Portfolio</p>
        <ScrollIntoView selector="#aboutSection">
          <i
            className={[
              'fas',
              'fa-chevron-down',
              'fa-4x',
              styles.chevronDown,
            ].join(' ')}
          ></i>
        </ScrollIntoView>
      </div>
    </div>
  );
};

export default OpenView;
