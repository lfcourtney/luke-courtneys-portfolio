import { useRef } from 'react';
import { useInView, motion } from 'framer-motion';
import styles from './ProjectsSection.module.scss';
import FilterList from './FilterList';

const DURATION_TIME: number = 0.5;

export default function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0 });

  return (
    <div className={styles.background}>
      <motion.div
        initial="hidden"
        animate={isInView ? 'show' : 'hidden'}
        ref={ref}
        className={styles.container}
      >
        <motion.h1
          variants={{
            hidden: { x: 250, opacity: 0 },
            show: {
              x: 0,
              opacity: 1,
              transition: {
                type: 'spring',
                duration: DURATION_TIME,
                delay: DURATION_TIME,
              },
            },
          }}
          className={styles.header}
        >
          Projects
        </motion.h1>
        <motion.div
          variants={{
            hidden: { x: '300%', opacity: 0 },
            show: {
              x: 0,
              opacity: 1,
              transition: { type: 'spring', duration: DURATION_TIME },
            },
          }}
          className={styles.underline}
        ></motion.div>
        <motion.div
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                duration: DURATION_TIME,
                delay: DURATION_TIME * 2,
              },
            },
          }}
          className={styles.filterContainer}
        >
          <FilterList />
        </motion.div>
      </motion.div>
    </div>
  );
}
