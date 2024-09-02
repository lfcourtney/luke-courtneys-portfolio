import { useState } from 'react';
import FilterList from './FilterList';
import styles from './ExperienceGallery.module.scss';

export type FilterListValues = 'experience' | 'education';

export default function ExperienceGallery() {
  const [filterValue, setFilterValue] =
    useState<FilterListValues>('experience');

  const changeFilterValue = (newFilterValue: FilterListValues): void => {
    setFilterValue(newFilterValue);
  };

  return (
    <>
      <div className={styles.filterContainer}>
        <FilterList
          filterValue={filterValue}
          changeFilterValue={changeFilterValue}
        />
      </div>
    </>
  );
}
