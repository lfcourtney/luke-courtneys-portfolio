import { useState } from 'react';
import styles from './ProjectGallery.module.scss';
import { motion, Transition, Variant } from 'framer-motion';
import FilterList from './FilterList';
import GalleryItem from './GalleryItem';

const DURATION_TIME: number = 0.5;

const selectorTransition: Transition = {
  duration: 1.4,
  type: 'spring',
  bounce: 0,
};

// const selectorCancelTransition: Transition = {
//   duration: 0,
// };

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
  const [filterValue, setFilterValue] = useState<FilterListValues>('all');

  const changeFilterValue = (newFilterValue: FilterListValues) => {
    setFilterValue(newFilterValue);
  };

  return (
    <>
      <motion.div
        transition={{
          duration: DURATION_TIME,
          delay: DURATION_TIME * 2,
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: isInView ? 1 : 0 }}
        className={styles.filterContainer}
      >
        <FilterList
          filterValue={filterValue}
          changeFilterValue={changeFilterValue}
        />
      </motion.div>
      <motion.div
        transition={{
          duration: DURATION_TIME,
          delay: DURATION_TIME * 2,
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: isInView ? 1 : 0 }}
        className={styles.galleryContainer}
      >
        <GalleryItem
          title="La Stalla At Stables"
          img="/galleryImages/la_stalla_at_stables.jpg"
          filterValue={filterValue}
          variants={{
            all: {
              top: 0,
              left: 0,
              ...showGalleryItemVariant,
              transition: selectorTransition,
            },
            react: {
              top: 0,
              left: 0,
              ...showGalleryItemVariant,
              transition: selectorTransition,
            },
            frontend: {
              top: 0,
              left: 0,
              ...showGalleryItemVariant,
              transition: selectorTransition,
            },
            backend: {
              ...hideGalleryItemVariant,
              transition: selectorTransition,
            },
          }}
        />
        <GalleryItem
          title="Tank Battle Game"
          img="/galleryImages/tank_battle_game.png"
          filterValue={filterValue}
          variants={{
            all: {
              top: 0,
              left: '33.33%',
              ...showGalleryItemVariant,
              transition: selectorTransition,
            },
            react: {
              ...hideGalleryItemVariant,
              transition: selectorTransition,
            },
            frontend: {
              top: 0,
              left: '33.33%',
              ...showGalleryItemVariant,
              transition: selectorTransition,
            },
            backend: {
              ...hideGalleryItemVariant,
              transition: selectorTransition,
            },
          }}
        />
        <GalleryItem
          title="Kings Chippy & Chinese Takeaway"
          img="/galleryImages/kings_chippy_chinese_takeaway.png"
          filterValue={filterValue}
          variants={{
            all: {
              top: 0,
              left: '66.66%',
              ...showGalleryItemVariant,
              transition: selectorTransition,
            },
            react: {
              ...hideGalleryItemVariant,
              transition: selectorTransition,
            },
            frontend: {
              ...hideGalleryItemVariant,
              transition: selectorTransition,
            },
            backend: {
              top: 0,
              left: 0,
              ...showGalleryItemVariant,
              transition: selectorTransition,
            },
          }}
        />
        <GalleryItem
          title="Ersatz BBC Website"
          img="/galleryImages/ersartz_bbc_website.png"
          filterValue={filterValue}
          variants={{
            all: {
              top: '33.33%',
              left: 0,
              ...showGalleryItemVariant,
              transition: selectorTransition,
            },
            react: {
              ...hideGalleryItemVariant,
              transition: selectorTransition,
            },
            frontend: {
              top: 0,
              left: '66.66%',
              ...showGalleryItemVariant,
              transition: selectorTransition,
            },
            backend: {
              ...hideGalleryItemVariant,
              transition: selectorTransition,
            },
          }}
        />
        <GalleryItem
          title="Circus Game"
          img="/galleryImages/circus_game.png"
          filterValue={filterValue}
          variants={{
            all: {
              top: '33.33%',
              left: '33.33%',
              ...showGalleryItemVariant,
              transition: selectorTransition,
            },
            react: {
              ...hideGalleryItemVariant,
              transition: selectorTransition,
            },
            frontend: {
              top: '33.33%',
              left: 0,
              ...showGalleryItemVariant,
              transition: selectorTransition,
            },
            backend: {
              ...hideGalleryItemVariant,
              transition: selectorTransition,
            },
          }}
        />
        <GalleryItem
          title="Live Extreme Weather Tracker"
          img="/galleryImages/live_weather_tracker.png"
          filterValue={filterValue}
          variants={{
            all: {
              top: '33.33%',
              left: '66.66%',
              ...showGalleryItemVariant,
              transition: selectorTransition,
            },
            react: {
              top: 0,
              left: '33.33%',
              ...showGalleryItemVariant,
              transition: selectorTransition,
            },
            frontend: {
              top: '33.33%',
              left: '33.33%',
              ...showGalleryItemVariant,
              transition: selectorTransition,
            },
            backend: {
              ...hideGalleryItemVariant,
              transition: selectorTransition,
            },
          }}
        />
        <GalleryItem
          title="YouTube Style Comments System"
          img="/galleryImages/youtube_style_comments.png"
          filterValue={filterValue}
          variants={{
            all: {
              top: '66.66%',
              left: 0,
              ...showGalleryItemVariant,
              transition: selectorTransition,
            },
            react: {
              top: '33.33%',
              left: 0,
              ...showGalleryItemVariant,
              transition: selectorTransition,
            },
            frontend: {
              ...hideGalleryItemVariant,
              transition: selectorTransition,
            },
            backend: {
              top: 0,
              left: '33.33%',
              ...showGalleryItemVariant,
              transition: selectorTransition,
            },
          }}
        />
        <GalleryItem
          title="Typing Test Game"
          img="/galleryImages/typing_test.png"
          filterValue={filterValue}
          variants={{
            all: {
              top: '66.66%',
              left: '33.33%',
              ...showGalleryItemVariant,
              transition: selectorTransition,
            },
            react: {
              ...hideGalleryItemVariant,
              transition: selectorTransition,
            },
            frontend: {
              ...hideGalleryItemVariant,
              transition: selectorTransition,
            },
            backend: {
              top: 0,
              left: '66.66%',
              ...showGalleryItemVariant,
              transition: selectorTransition,
            },
          }}
        />
        <GalleryItem
          title="Preference Finder Interactive Quiz"
          img="/galleryImages/preference_finder.png"
          filterValue={filterValue}
          variants={{
            all: {
              top: '66.66%',
              left: '66.66%',
              ...showGalleryItemVariant,
              transition: selectorTransition,
            },
            react: {
              top: 0,
              left: '66.66%',
              ...showGalleryItemVariant,
              transition: selectorTransition,
            },
            frontend: {
              top: '33.33%',
              left: '66.66%',
              ...showGalleryItemVariant,
              transition: selectorTransition,
            },
            backend: {
              ...hideGalleryItemVariant,
              transition: selectorTransition,
            },
          }}
        />
      </motion.div>
    </>
  );
}
