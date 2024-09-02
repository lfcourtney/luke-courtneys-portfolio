import { useState, useEffect } from 'react';
import styles from './FilterList.module.scss';
import { motion, Transition } from 'framer-motion';
import { FilterListValues } from './ExperienceGallery';

const selectorTransition: Transition = {
  duration: 1.2,
  type: 'spring',
  bounce: 0,
};

const selectorCancelTransition: Transition = {
  duration: 0,
};

interface FilterListInterface {
  width: number;
  filterValue: FilterListValues;
  changeFilterValue: (newFilterValue: FilterListValues) => void;
}

const MOBILE_BREAKPOINT: number = 616;

export default function FilterList({
  width,
  filterValue,
  changeFilterValue,
}: FilterListInterface) {
  const [changeWidthBreakpoint, setChangeWidthBreakpoint] = useState(
    width > MOBILE_BREAKPOINT
  );

  useEffect(() => {
    // Because 'useEffect' hook is called AFTER the functional component is rendered, for a single frame
    // (and a single frame only), the value of this state boolean will be different from the width condition
    // that is used to determine this boolean. We use this to cancel the animation on width breakpoints.
    setChangeWidthBreakpoint(width > MOBILE_BREAKPOINT);
  }, [width]);

  return (
    <>
      <ul className={styles.filterList}>
        <li
          className={[
            styles.filterListItem,
            filterValue === 'experience' && styles.filterListItemSelected,
          ].join(' ')}
          onClick={() => changeFilterValue('experience')}
        >
          Experience
        </li>
        <li
          className={[
            styles.filterListItem,
            filterValue === 'education' && styles.filterListItemSelected,
          ].join(' ')}
          onClick={() => changeFilterValue('education')}
        >
          Education
        </li>
      </ul>
      <motion.div
        initial={filterValue}
        animate={filterValue}
        className={styles.selector}
        variants={{
          experience: {
            width: width > MOBILE_BREAKPOINT ? 155 : 100,
            left: width > MOBILE_BREAKPOINT ? 132 : 83,
            transition:
              changeWidthBreakpoint !== width > MOBILE_BREAKPOINT
                ? selectorCancelTransition
                : selectorTransition,
          },
          education: {
            width: width > MOBILE_BREAKPOINT ? 145 : 90,
            left: width > MOBILE_BREAKPOINT ? 313 : 189,
            transition:
              changeWidthBreakpoint !== width > MOBILE_BREAKPOINT
                ? selectorCancelTransition
                : selectorTransition,
          },
        }}
      ></motion.div>
    </>
  );
}
