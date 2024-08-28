import { useState, useEffect, useContext } from 'react';
import styles from './ProjectGallery.module.scss';
import { motion, Transition, Variant } from 'framer-motion';
import globalContext from '../../hooks/globalContext';
import FilterList from './FilterList';
import GalleryItem from './GalleryItem';

type BreakpointSize = 'large' | 'med' | 'small';

function calculateBreakpointSize(width: number): BreakpointSize {
  if (width < 958) {
    return 'small';
  } else if (width < 1301) {
    return 'med';
  }
  return 'large';
}

const DURATION_TIME: number = 0.5;

const regularTransition: Transition = {
  duration: 1.4,
  type: 'spring',
  bounce: 0,
};

const cancelTransition: Transition = {
  duration: 0,
};

const showGalleryItemVariant: Variant = {
  scale: 1,
  opacity: 1,
};

const hideGalleryItemVariant: Variant = {
  scale: 0,
  opacity: 0,
};

export type FilterListValues = 'all' | 'react' | 'frontend' | 'backend';

export default function ProjectGallery({ isInView }: { isInView: boolean }) {
  const { width } = useContext(globalContext);
  const [breakpointSize, setBreakpointSize] = useState<BreakpointSize>(
    calculateBreakpointSize(width)
  );
  const currentBreakpointSize: BreakpointSize = calculateBreakpointSize(width);

  const canUseRegularTransition: Transition =
    breakpointSize !== currentBreakpointSize
      ? cancelTransition
      : regularTransition;

  const [filterValue, setFilterValue] = useState<FilterListValues>('all');
  const [canChangeFilter, setCanChangeFilter] = useState<boolean>(false);
  const changeFilterValue = (newFilterValue: FilterListValues) => {
    if (canChangeFilter) {
      setFilterValue(newFilterValue);
    }
  };

  useEffect(() => {
    // Because 'useEffect' hook is called AFTER the functional component is rendered, for a single frame
    // (and a single frame only), the breakpoint size will be different from the function execution
    // that is used to determine this value. We use this to cancel the animation transitions.
    setBreakpointSize(calculateBreakpointSize(width));
  }, [width]);

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
          setCanChangeFilter(true);
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
      <motion.div
        initial={filterValue}
        animate={filterValue}
        variants={{
          all: {
            height:
              currentBreakpointSize === 'small'
                ? 2700
                : currentBreakpointSize === 'med'
                ? 1500
                : 900,
            transition: canUseRegularTransition,
          },
          react: {
            height:
              currentBreakpointSize === 'small'
                ? 1200
                : currentBreakpointSize === 'med'
                ? 600
                : 600,
            transition: canUseRegularTransition,
          },
          frontend: {
            height:
              currentBreakpointSize === 'small'
                ? 1800
                : currentBreakpointSize === 'med'
                ? 900
                : 600,
            transition: canUseRegularTransition,
          },
          backend: {
            height:
              currentBreakpointSize === 'small'
                ? 900
                : currentBreakpointSize === 'med'
                ? 600
                : 300,
            transition: canUseRegularTransition,
          },
        }}
        className={styles.galleryHeightAdjustment}
      >
        <div className={styles.galleryContainer}>
          <GalleryItem
            title="La Stalla At Stables"
            subTitle="React / Next JS"
            img="/galleryImages/la_stalla_at_stables.jpg"
            filterValue={filterValue}
            variants={{
              all: {
                top: 0,
                left: 0,
                ...showGalleryItemVariant,
                transition: regularTransition,
              },
              react: {
                top: 0,
                left: 0,
                ...showGalleryItemVariant,
                transition: regularTransition,
              },
              frontend: {
                top: 0,
                left: 0,
                ...showGalleryItemVariant,
                transition: regularTransition,
              },
              backend: {
                ...hideGalleryItemVariant,
                transition: regularTransition,
              },
            }}
          />
          <GalleryItem
            title="Tank Battle Game"
            subTitle="JavaScript / HTML Canvas"
            img="/galleryImages/tank_battle_game.png"
            filterValue={filterValue}
            variants={{
              all: {
                top: currentBreakpointSize === 'small' ? '11.11%' : 0,
                left:
                  currentBreakpointSize === 'small'
                    ? 0
                    : currentBreakpointSize === 'med'
                    ? '50%'
                    : '33.33%',
                ...showGalleryItemVariant,
                transition: canUseRegularTransition,
              },
              react: {
                ...hideGalleryItemVariant,
                transition: regularTransition,
              },
              frontend: {
                top: currentBreakpointSize === 'small' ? '11.11%' : 0,
                left:
                  currentBreakpointSize === 'small'
                    ? 0
                    : currentBreakpointSize === 'med'
                    ? '50%'
                    : '33.33%',
                ...showGalleryItemVariant,
                transition: canUseRegularTransition,
              },
              backend: {
                ...hideGalleryItemVariant,
                transition: regularTransition,
              },
            }}
          />
          <GalleryItem
            title="Kings Chippy & Chinese Takeaway"
            subTitle="Nodejs / HTML, CSS & JavaScript"
            img="/galleryImages/kings_chippy_chinese_takeaway.png"
            filterValue={filterValue}
            variants={{
              all: {
                top:
                  currentBreakpointSize === 'small'
                    ? '22.22%'
                    : currentBreakpointSize === 'med'
                    ? '20%'
                    : 0,
                left: currentBreakpointSize === 'large' ? '66.66%' : 0,
                ...showGalleryItemVariant,
                transition: canUseRegularTransition,
              },
              react: {
                ...hideGalleryItemVariant,
                transition: regularTransition,
              },
              frontend: {
                ...hideGalleryItemVariant,
                transition: regularTransition,
              },
              backend: {
                top: 0,
                left: 0,
                ...showGalleryItemVariant,
                transition: regularTransition,
              },
            }}
          />
          <GalleryItem
            title="Ersatz BBC Website"
            subTitle="HTML, CSS & JavaScript"
            img="/galleryImages/ersartz_bbc_website.png"
            filterValue={filterValue}
            variants={{
              all: {
                top:
                  currentBreakpointSize === 'small'
                    ? '33.33%'
                    : currentBreakpointSize === 'med'
                    ? '20%'
                    : '33.33%',
                left: currentBreakpointSize === 'med' ? '50%' : 0,
                ...showGalleryItemVariant,
                transition: canUseRegularTransition,
              },
              react: {
                ...hideGalleryItemVariant,
                transition: regularTransition,
              },
              frontend: {
                top:
                  currentBreakpointSize === 'small'
                    ? '22.22%'
                    : currentBreakpointSize === 'med'
                    ? '20%'
                    : 0,
                left: currentBreakpointSize === 'large' ? '66.66%' : 0,
                ...showGalleryItemVariant,
                transition: canUseRegularTransition,
              },
              backend: {
                ...hideGalleryItemVariant,
                transition: regularTransition,
              },
            }}
          />
          <GalleryItem
            title="Circus Game"
            subTitle="JavaScript / HTML Canvas"
            img="/galleryImages/circus_game.png"
            filterValue={filterValue}
            variants={{
              all: {
                top:
                  currentBreakpointSize === 'small'
                    ? '44.44%'
                    : currentBreakpointSize === 'med'
                    ? '40%'
                    : '33.33%',
                left: currentBreakpointSize === 'large' ? '33.33%' : 0,
                ...showGalleryItemVariant,
                transition: canUseRegularTransition,
              },
              react: {
                ...hideGalleryItemVariant,
                transition: regularTransition,
              },
              frontend: {
                top:
                  currentBreakpointSize === 'small'
                    ? '33.33%'
                    : currentBreakpointSize === 'med'
                    ? '20%'
                    : '33.33%',
                left: currentBreakpointSize === 'med' ? '50%' : 0,
                ...showGalleryItemVariant,
                transition: canUseRegularTransition,
              },
              backend: {
                ...hideGalleryItemVariant,
                transition: regularTransition,
              },
            }}
          />
          <GalleryItem
            title="Live Extreme Weather Tracker"
            subTitle="React"
            img="/galleryImages/live_weather_tracker.png"
            filterValue={filterValue}
            variants={{
              all: {
                top:
                  currentBreakpointSize === 'small'
                    ? '55.55%'
                    : currentBreakpointSize === 'med'
                    ? '40%'
                    : '33.33%',
                left:
                  currentBreakpointSize === 'small'
                    ? 0
                    : currentBreakpointSize === 'med'
                    ? '50%'
                    : '66.66%',
                ...showGalleryItemVariant,
                transition: canUseRegularTransition,
              },
              react: {
                top: currentBreakpointSize === 'small' ? '11.11%' : 0,
                left:
                  currentBreakpointSize === 'small'
                    ? 0
                    : currentBreakpointSize === 'med'
                    ? '50%'
                    : '33.33%',
                ...showGalleryItemVariant,
                transition: canUseRegularTransition,
              },
              frontend: {
                top:
                  currentBreakpointSize === 'small'
                    ? '44.44%'
                    : currentBreakpointSize === 'med'
                    ? '40%'
                    : '33.33%',
                left: currentBreakpointSize === 'large' ? '33.33%' : 0,
                ...showGalleryItemVariant,
                transition: canUseRegularTransition,
              },
              backend: {
                ...hideGalleryItemVariant,
                transition: regularTransition,
              },
            }}
          />
          <GalleryItem
            title="YouTube Style Comments System"
            subTitle="React / Nodejs"
            img="/galleryImages/youtube_style_comments.png"
            filterValue={filterValue}
            variants={{
              all: {
                top: currentBreakpointSize === 'med' ? '60%' : '66.66%',
                left: 0,
                ...showGalleryItemVariant,
                transition: canUseRegularTransition,
              },
              react: {
                top:
                  currentBreakpointSize === 'small'
                    ? '22.22%'
                    : currentBreakpointSize === 'med'
                    ? '20%'
                    : '33.33%',
                left: 0,
                ...showGalleryItemVariant,
                transition: canUseRegularTransition,
              },
              frontend: {
                ...hideGalleryItemVariant,
                transition: regularTransition,
              },
              backend: {
                top: currentBreakpointSize === 'small' ? '11.11%' : 0,
                left:
                  currentBreakpointSize === 'small'
                    ? 0
                    : currentBreakpointSize === 'med'
                    ? '50%'
                    : '33.33%',
                ...showGalleryItemVariant,
                transition: canUseRegularTransition,
              },
            }}
          />
          <GalleryItem
            title="Typing Test Game"
            subTitle="Nodejs / HTML, CSS & JavaScript"
            img="/galleryImages/typing_test.png"
            filterValue={filterValue}
            variants={{
              all: {
                top:
                  currentBreakpointSize === 'small'
                    ? '77.77%'
                    : currentBreakpointSize === 'med'
                    ? '60%'
                    : '66.66%',
                left:
                  currentBreakpointSize === 'small'
                    ? 0
                    : currentBreakpointSize === 'med'
                    ? '50%'
                    : '33.33%',
                ...showGalleryItemVariant,
                transition: canUseRegularTransition,
              },
              react: {
                ...hideGalleryItemVariant,
                transition: regularTransition,
              },
              frontend: {
                ...hideGalleryItemVariant,
                transition: regularTransition,
              },
              backend: {
                top:
                  currentBreakpointSize === 'small'
                    ? '22.22%'
                    : currentBreakpointSize === 'med'
                    ? '20%'
                    : 0,
                left: currentBreakpointSize === 'large' ? '66.66%' : 0,
                ...showGalleryItemVariant,
                transition: canUseRegularTransition,
              },
            }}
          />
          <GalleryItem
            title="Preference Finder Interactive Quiz"
            subTitle="React / Framer Motion"
            img="/galleryImages/preference_finder.png"
            filterValue={filterValue}
            variants={{
              all: {
                top:
                  currentBreakpointSize === 'small'
                    ? '88.88%'
                    : currentBreakpointSize === 'med'
                    ? '80%'
                    : '66.66%',
                left: currentBreakpointSize === 'large' ? '66.66%' : 0,
                ...showGalleryItemVariant,
                transition: canUseRegularTransition,
              },
              react: {
                top:
                  currentBreakpointSize === 'small'
                    ? '33.33%'
                    : currentBreakpointSize === 'med'
                    ? '20%'
                    : 0,
                left:
                  currentBreakpointSize === 'small'
                    ? 0
                    : currentBreakpointSize === 'med'
                    ? '50%'
                    : '66.66%',
                ...showGalleryItemVariant,
                transition: canUseRegularTransition,
              },
              frontend: {
                top:
                  currentBreakpointSize === 'small'
                    ? '55.55%'
                    : currentBreakpointSize === 'med'
                    ? '40%'
                    : '33.33%',
                left:
                  currentBreakpointSize === 'small'
                    ? 0
                    : currentBreakpointSize === 'med'
                    ? '50%'
                    : '66.66%',
                ...showGalleryItemVariant,
                transition: canUseRegularTransition,
              },
              backend: {
                ...hideGalleryItemVariant,
                transition: regularTransition,
              },
            }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
}
