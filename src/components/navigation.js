import React from 'react'
import { Link } from 'gatsby'
import styles from './navigation.module.css'

export default ({navList, title}) =>  (
  <div className={styles.sidebar}>
    <div className={styles.sidebarContent}>
    <p>{title}</p>
    <nav role="navigation">

    <ul className={styles.navigation}>
        {navList.map((item, index) => {
          return <li className={styles.navigationItem} key={index}>
            <Link to={item.link}>{item.text}</Link>
          </li>
        })}
    </ul>
  </nav>
    </div>
  </div>
)
