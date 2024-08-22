// components/TopNavBar.js

import { motion } from 'framer-motion';
import styles from './TopNavBar.module.css';

const TopNavBar = () => {
  return (
    <motion.nav
      className={styles.navbar}
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className={styles.logo}>
        <h1>SIRAJ UL HAQUE</h1>
      </div>
      <ul className={styles.menu}>
        <li><a href="/">HOME</a></li>
        <li><a href="/filmography">FILMOGRAPHY</a></li>
        <li><a href="/books">BOOKS</a></li>
      </ul>
    </motion.nav>
  );
};

export default TopNavBar;
