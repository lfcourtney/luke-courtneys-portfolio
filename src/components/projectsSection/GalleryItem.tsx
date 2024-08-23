import React from 'react';
import { motion, Variant, Variants } from 'framer-motion';
import { FilterListValues } from './ProjectGallery';
import styles from './GalleryItem.module.scss';

interface GalleryItemProps {
  title: string;
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
      <img src={img} className={styles.image} alt={title} />
    </motion.div>
  );
}
