import { useState, useEffect } from 'react';
import useViewport from '../../hooks/ViewportProvider/useViewport';
import { motion, Transition } from 'framer-motion';
import styles from './FilterList.module.scss';

type FilterListValues = 'all' | 'react' | 'frontend' | 'backend';

const selectorTransition: Transition = {
  duration: 1,
  type: 'spring',
  bounce: 0,
};

const selectorCancelTransition: Transition = {
  duration: 0,
};

const MOBILE_BREAKPOINT: number = 616;

export default function FilterList() {
  const { width } = useViewport();
  const [filterValue, setFilterValue] = useState<FilterListValues>('all');
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
            filterValue === 'all' && styles.filterListItemSelected,
          ].join(' ')}
          onClick={() => {
            setFilterValue('all');
          }}
        >
          all
        </li>
        <li
          className={[
            styles.filterListItem,
            filterValue === 'react' && styles.filterListItemSelected,
          ].join(' ')}
          onClick={() => {
            setFilterValue('react');
          }}
        >
          react
        </li>
        <li
          className={[
            styles.filterListItem,
            filterValue === 'frontend' && styles.filterListItemSelected,
          ].join(' ')}
          onClick={() => {
            setFilterValue('frontend');
          }}
        >
          frontend
        </li>
        <li
          className={[
            styles.filterListItem,
            filterValue === 'backend' && styles.filterListItemSelected,
          ].join(' ')}
          onClick={() => {
            setFilterValue('backend');
          }}
        >
          backend
        </li>
      </ul>
      <motion.div
        initial={false}
        animate={filterValue}
        variants={{
          all: {
            left: width > MOBILE_BREAKPOINT ? 26 : 31,
            width: width > MOBILE_BREAKPOINT ? 90 : 50,
            transition:
              changeWidthBreakpoint !== width > MOBILE_BREAKPOINT
                ? selectorCancelTransition
                : selectorTransition,
          },
          react: {
            left: width > MOBILE_BREAKPOINT ? 126 : 83,
            width: width > MOBILE_BREAKPOINT ? 120 : 65,
            transition:
              changeWidthBreakpoint !== width > MOBILE_BREAKPOINT
                ? selectorCancelTransition
                : selectorTransition,
          },
          frontend: {
            left: width > MOBILE_BREAKPOINT ? 257 : 153,
            width: width > MOBILE_BREAKPOINT ? 150 : 90,
            transition:
              changeWidthBreakpoint !== width > MOBILE_BREAKPOINT
                ? selectorCancelTransition
                : selectorTransition,
          },
          backend: {
            left: width > MOBILE_BREAKPOINT ? 430 : 250,
            width: width > MOBILE_BREAKPOINT ? 130 : 80,
            transition:
              changeWidthBreakpoint !== width > MOBILE_BREAKPOINT
                ? selectorCancelTransition
                : selectorTransition,
          },
        }}
        className={styles.selector}
      ></motion.div>
    </>
  );
}
