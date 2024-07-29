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
        <h1>Siraj Ul Haque</h1>
      </div>
      <ul className={styles.menu}>
        <li><a href="/">Home</a></li>
        <li><a href="/filmography">Filmography</a></li>
        <li><a href="/books">Books</a></li>
      </ul>
    </motion.nav>
  );
};

export default TopNavBar;
