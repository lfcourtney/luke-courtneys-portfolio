import React from 'react';
import { motion, Variant, Variants } from 'framer-motion';
import { FilterListValues } from './ProjectGallery';
import styles from './GalleryItem.module.scss';

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
        <div className={styles.btn}>LEARN MORE</div>
      </div>
      <img src={img} className={styles.image} alt={title} />
    </motion.div>
  );
}
