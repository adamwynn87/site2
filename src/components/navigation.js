import React from 'react'
import { Link } from 'gatsby'
import styles from './navigation.module.css'

export default () => (
  <nav role="navigation">
    <ul className={styles.navigation}>
      <li className={styles.navigationItem}>
        <Link to="/">Home</Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/art/">Art</Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/art/">CV</Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/art/">Contact</Link>
      </li>
    </ul>
  </nav>
)
