import React from 'react';
import styles from './OpenView.module.scss';

const OpenView = (): React.JSX.Element => {
  return (
    <div className={styles.container}>
      <div className={styles.containerChild}>
        <h1 className={styles.header}>Luke Courtney</h1>
        <hr className={styles.horizontalRule} />
        <p className={styles.subHeader}>Portfolio</p>
        <i
          className={[
            'fas',
            'fa-chevron-down',
            'fa-4x',
            styles.chevronDown,
          ].join(' ')}
        ></i>
      </div>
    </div>
  );
};

export default OpenView;
