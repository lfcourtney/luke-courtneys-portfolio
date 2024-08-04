import styles from './HamburgerMenu.module.scss';
import { motion } from 'framer-motion';

interface HamburgerMenuProps {
  hamburgerOpen: boolean;
  onClick: () => void;
}

const BAR_WIDTH = 35;
const BAR_HEIGHT = 5;
const HAMBURGER_GAP = 6;
const HAMBURGER_HEIGHT = 3 * BAR_HEIGHT + 2 * HAMBURGER_GAP;
const ROTATION_WIDTH = HAMBURGER_HEIGHT * 1.41421356237;

export default function HamburgerMenu({
  onClick,
  hamburgerOpen,
}: HamburgerMenuProps) {
  return (
    <motion.div
      initial={false}
      animate={hamburgerOpen ? 'open' : 'closed'}
      onClick={onClick}
      className={styles.container}
    >
      <motion.div
        variants={{
          open: { rotate: 45, width: ROTATION_WIDTH, y: BAR_HEIGHT / -2 },
          closed: { rotate: 0, width: BAR_WIDTH, y: 0 },
        }}
        className={styles.hamburgerMenuTop}
      ></motion.div>
      <motion.div
        variants={{
          open: { opacity: 0, width: 0 },
          closed: { opacity: 1, width: 35 },
        }}
        className={styles.hamburgerMenu}
      ></motion.div>
      <motion.div
        variants={{
          open: { rotate: -45, width: ROTATION_WIDTH, y: BAR_HEIGHT / 2 },
          closed: { rotate: 0, width: BAR_WIDTH, y: 0 },
        }}
        className={styles.hamburgerMenuBottom}
      ></motion.div>
    </motion.div>
  );
}
