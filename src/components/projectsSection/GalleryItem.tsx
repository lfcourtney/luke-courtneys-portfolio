import { useContext } from 'react';
import globalContext from '../../hooks/globalContext';
import { motion, Variant, Variants } from 'framer-motion';
import { FilterListValues } from './ProjectGallery';
import styles from './GalleryItem.module.scss';

import GALLERY_INFORMATION from '../../data/galleryItemData';

interface GalleryItemProps {
  title: string;
  subTitle: string;
  img: string;
  filterValue: FilterListValues;
  variants: GalleryItemVariants;
}

interface GalleryItemVariants extends Variants {
  all: Variant;
  react: Variant;
  frontend: Variant;
  backend: Variant;
}

export default function GalleryItem({
  title,
  subTitle,
  img,
  filterValue,
  variants,
}: GalleryItemProps) {
  const { setProjectsSectionModalInfo } = useContext(globalContext);

  return (
    <motion.div
      initial={filterValue}
      animate={filterValue}
      variants={variants}
      className={styles.galleryItem}
    >
      <div className={styles.overlay}></div>
      <div className={styles.contentContainer}>
        <div className={styles.textContent}>
          <h1 className={styles.header}>{title}</h1>
          <p className={styles.paragraph}>{subTitle}</p>
        </div>
        <div
          onClick={() =>
            setProjectsSectionModalInfo({
              title,
              link: GALLERY_INFORMATION[title].link,
              img,
              text: GALLERY_INFORMATION[title].text,
            })
          }
          className={styles.btn}
        >
          LEARN MORE
        </div>
      </div>
      <img src={img} className={styles.image} alt={title} />
    </motion.div>
  );
}
