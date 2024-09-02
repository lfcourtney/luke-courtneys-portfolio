import { useState, useContext } from 'react';
import globalContext from '../../hooks/globalContext';
import FilterList from './FilterList';
import styles from './ExperienceGallery.module.scss';

export type FilterListValues = 'experience' | 'education';

export default function ExperienceGallery() {
  const { width } = useContext(globalContext);

  const [filterValue, setFilterValue] =
    useState<FilterListValues>('experience');

  const changeFilterValue = (newFilterValue: FilterListValues): void => {
    setFilterValue(newFilterValue);
  };

  return (
    <>
      <div className={styles.filterContainer}>
        <FilterList
          width={width}
          filterValue={filterValue}
          changeFilterValue={changeFilterValue}
        />
      </div>
    </>
  );
}
