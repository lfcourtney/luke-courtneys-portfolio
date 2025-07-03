import { useState, useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import globalContext from '../../hooks/globalContext';
import FilterList from './FilterList';
import styles from './ExperienceGallery.module.scss';

const DURATION_TIME: number = 0.5;

export type FilterListValues = 'experience' | 'education';

export default function ExperienceGallery({ isInView }: { isInView: boolean }) {
  const { width } = useContext(globalContext);

  const [filterValue, setFilterValue] =
    useState<FilterListValues>('experience');
  const [canChangeFilter, setCanChangeFilterValue] = useState<boolean>(false);

  const changeFilterValue = (newFilterValue: FilterListValues): void => {
    if (canChangeFilter) {
      setFilterValue(newFilterValue);
    }
  };

  return (
    <motion.div
      transition={{
        duration: DURATION_TIME,
        delay: DURATION_TIME * 2,
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: isInView ? 1 : 0 }}
      onAnimationComplete={(definition: { opacity: number }) => {
        if (definition.opacity === 1) {
          setCanChangeFilterValue(true);
        }
      }}
    >
      <div className={styles.filterContainer}>
        <FilterList
          width={width}
          filterValue={filterValue}
          changeFilterValue={changeFilterValue}
        />
      </div>
      <div className={styles.galleryContainer}>
        <AnimatePresence>
          {filterValue === 'experience' ? (
            <div className={styles.itemContainer}>
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 100 }}
                transition={{
                  type: 'spring',
                  duration: DURATION_TIME,
                }}
                className={styles.item}
              >
                <h1 className={styles.itemHeader}>
                  Software Developer Internship{' '}
                  <small>Jul 2023 - Jul 2024</small>
                </h1>
                <p className={styles.itemSubHeader}>
                  Royal HaskoningDHV · Full-time
                </p>
                <p className={styles.itemSubHeader}>
                  Birmingham, England, United Kingdom · Hybrid
                </p>
                <p className={styles.itemText}>
                  Member of Witness development team, working in Scrum delivery
                  model. Improved and developed from the ground up CI/CD
                  Pipelines. Gained Azure Devops experience. Developed Microsoft
                  Azure Static Web Apps to offer web platforms and services to
                  main Witness application. Collaborated with other developers
                  with Git version control.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 100 }}
                transition={{
                  type: 'spring',
                  duration: DURATION_TIME,
                  delay: 0.2,
                }}
                className={styles.item}
              >
                <h1 className={styles.itemHeader}>
                  Summer Internship <small>May 2022 - Sep 2022</small>
                </h1>
                <p className={styles.itemSubHeader}>aryza</p>
                <p className={styles.itemSubHeader}>Barnt Green UK</p>
                <p className={styles.itemText}>
                  As a developer, I was tasked with creating a C# application
                  designed to transform desktop-bound graphical user interfaces
                  (GUIs) built with Windows Forms (a UI framework provided by
                  Microsoft) into a web-based environment. This application
                  translates the C# code behind the Windows Forms into an
                  equivalent React app. The React app is specifically styled to
                  resemble the original Windows Forms GUI, but in a format that
                  is accessible from the web, making it no longer confined to
                  the desktop. As a developer, I worked within the Scrum
                  delivery model, receiving and responding to feedback from my
                  project manager.
                </p>
              </motion.div>
            </div>
          ) : null}
        </AnimatePresence>
        <AnimatePresence>
          {filterValue === 'education' ? (
            <div className={styles.itemContainer}>
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 100 }}
                transition={{
                  type: 'spring',
                  duration: DURATION_TIME,
                }}
                className={styles.item}
              >
                <h1 className={styles.itemHeader}>
                  Aston University <small>2021 - 2025</small>
                </h1>
                <p className={styles.itemSubHeader}>
                  First-Class degree BSc (Hons) Computer Science
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 100 }}
                transition={{
                  type: 'spring',
                  duration: DURATION_TIME,
                  delay: 0.2,
                }}
                className={styles.item}
              >
                <h1 className={styles.itemHeader}>
                  Solihull Sixth Form College <small>2018 - 2020</small>
                </h1>
                <p className={styles.itemSubHeader}>
                  A Levels: Business (A), History (A)
                </p>
                <p className={styles.itemSubHeader}>
                  BTEC Subsidiary Diploma IT: Distinction (D*)
                </p>
              </motion.div>
            </div>
          ) : null}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
