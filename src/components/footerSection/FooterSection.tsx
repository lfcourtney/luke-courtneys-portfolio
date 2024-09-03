import React from 'react';
import ScrollIntoView from 'react-scroll-into-view';
import styles from './FooterSection.module.scss';

export default function FooterSection() {
  return (
    <div className={styles.footer}>
      <p className={styles.copyright}>
        luke courtney © {new Date().getFullYear()}
      </p>
      <ScrollIntoView selector="#openView" style={{ display: 'inline' }}>
        <div className={styles.arrowBackground}>
          <i className={['fas', 'fa-chevron-up', styles.arrow].join(' ')}></i>
          <i className={['fas', 'fa-chevron-up', styles.arrow].join(' ')}></i>
        </div>
      </ScrollIntoView>
    </div>
  );
}
