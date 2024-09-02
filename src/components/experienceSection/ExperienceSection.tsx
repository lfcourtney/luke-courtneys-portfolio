import React from 'react';
import ExperienceGallery from './ExperienceGallery';
import styles from './ExperienceSection.module.scss';

export default function ExperienceSection() {
  return (
    <div className={styles.container} id="experienceSection">
      <h1 className={styles.header}>Experience</h1>
      <div className={styles.underline}></div>
      <ExperienceGallery />
    </div>
  );
}
