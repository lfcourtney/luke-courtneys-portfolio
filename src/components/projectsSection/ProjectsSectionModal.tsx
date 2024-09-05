import styles from './ProjectsSectionModal.module.scss';
import { useContext, MouseEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import globalContext from '../../hooks/globalContext';

export interface ProjectsSectionModalInfo {
  title: string;
  link: string;
  img: string;
  text: string;
}

export default function ProjectsSectionModal() {
  const { setProjectsSectionModalInfo, projectsSectionModalInfo } =
    useContext(globalContext);

  const handleChildElementClick = (e: MouseEvent) => {
    e.stopPropagation();
    // Do other stuff here
  };

  return (
    <AnimatePresence>
      {projectsSectionModalInfo && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.2 } }}
          exit={{ opacity: 0, transition: { duration: 0.3 } }}
          key="modal"
          className={styles.modal}
          onClick={() => setProjectsSectionModalInfo(undefined)}
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.2 }}
            className={styles.card}
            onClick={(e) => handleChildElementClick(e)}
          >
            <a
              href={projectsSectionModalInfo.link}
              className={styles.imageLink}
              target="_blank"
            >
              <img
                src={projectsSectionModalInfo.img}
                alt={projectsSectionModalInfo.title}
                className={styles.image}
              />
            </a>
            <div className={styles.textContainer}>
              <a
                href={projectsSectionModalInfo.link}
                className={styles.headerLink}
                target="_blank"
              >
                <h1 className={styles.header}>
                  {projectsSectionModalInfo.title}
                </h1>
              </a>
              <p>{projectsSectionModalInfo.text}</p>
              <i
                className={['fas', 'fa-times', styles.icon].join(' ')}
                onClick={() => setProjectsSectionModalInfo(undefined)}
              ></i>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
