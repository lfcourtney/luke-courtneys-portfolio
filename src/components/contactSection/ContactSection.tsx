import { useRef } from 'react';
import { useInView, motion } from 'framer-motion';
import styles from './ContactSection.module.scss';
import useVisible from '../../hooks/useVisible';

const DURATION_TIME: number = 0.5;

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '0px 0px -50% 0px' });

  useVisible({ reference: ref, navBarSection: 'contact' });

  return (
    <div className={styles.background}>
      <motion.div
        initial="hidden"
        animate={isInView ? 'show' : 'hidden'}
        ref={ref}
        className={styles.container}
        id="contactSection"
      >
        <motion.h1
          variants={{
            hidden: { x: 250, opacity: 0 },
            show: {
              x: 0,
              opacity: 1,
              transition: {
                type: 'spring',
                duration: DURATION_TIME,
                delay: DURATION_TIME,
              },
            },
          }}
          className={styles.header}
        >
          contact
        </motion.h1>
        <motion.div
          variants={{
            hidden: { x: '300%', opacity: 0 },
            show: {
              x: 0,
              opacity: 1,
              transition: { type: 'spring', duration: DURATION_TIME },
            },
          }}
          className={styles.underline}
        ></motion.div>
        <motion.p
          variants={{
            hidden: { scale: 0 },
            show: {
              scale: 1,
              transition: {
                type: 'spring',
                bounce: 0.45,
                duration: DURATION_TIME,
                delay: DURATION_TIME * 2,
              },
            },
          }}
          className={styles.formTitle}
        >
          Have a question or want to work together?
        </motion.p>
        <motion.form
          variants={{
            hidden: { scale: 0 },
            show: {
              scale: 1,
              transition: {
                type: 'spring',
                bounce: 0.45,
                duration: DURATION_TIME,
                delay: DURATION_TIME * 2,
              },
            },
          }}
          autoComplete="off"
          className={styles.form}
        >
          <input type="text" name="name" required placeholder="Name" />
          <input type="text" name="subject" required placeholder="Subject" />
          <textarea
            name="text"
            placeholder="Enter Your Message Here"
          ></textarea>
          <button type="submit" className={styles.formSubmit}>
            submit
          </button>
        </motion.form>
      </motion.div>
    </div>
  );
}
