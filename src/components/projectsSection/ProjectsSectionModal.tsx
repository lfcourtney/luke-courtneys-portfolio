import styles from './ProjectsSectionModal.module.scss';
import { useContext, MouseEvent } from 'react';
import globalContext from '../../hooks/globalContext';

export interface ProjectsSectionModalProps {
  title: string;
  link: string;
  img: string;
  text: string;
}

export default function ProjectsSectionModal({
  title,
  link,
  img,
  text,
}: ProjectsSectionModalProps) {
  const { setProjectsSectionModalInfo } = useContext(globalContext);

  const handleChildElementClick = (e: MouseEvent) => {
    e.stopPropagation();
    // Do other stuff here
  };

  return (
    <div
      className={styles.modal}
      onClick={() => setProjectsSectionModalInfo(undefined)}
    >
      <div className={styles.card} onClick={(e) => handleChildElementClick(e)}>
        <a href={link} className={styles.imageLink} target="_blank">
          <img src={img} alt={title} className={styles.image} />
        </a>
        <div className={styles.textContainer}>
          <a href={link} className={styles.headerLink} target="_blank">
            <h1 className={styles.header}>{title}</h1>
          </a>
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
}
