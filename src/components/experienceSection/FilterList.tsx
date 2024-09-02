import React from 'react';
import styles from './FilterList.module.scss';
import { motion } from 'framer-motion';
import { FilterListValues } from './ExperienceGallery';

interface FilterListInterface {
  filterValue: FilterListValues;
  changeFilterValue: (newFilterValue: FilterListValues) => void;
}

export default function FilterList({ filterValue }: FilterListInterface) {
  return (
    <>
      <ul className={styles.filterList}>
        <li className={styles.filterListItem}>Experience</li>
        <li className={styles.filterListItem}>Education</li>
      </ul>
      <motion.div
        initial={filterValue}
        animate={filterValue}
        className={styles.selector}
        variants={{
          experience: {
            width: 150,
            left: 133,
          },
        }}
      ></motion.div>
    </>
  );
}
