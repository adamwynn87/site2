import React from 'react'
import { Link } from 'gatsby'
import { useStaticQuery, graphql } from "gatsby"
import styles from './navigation.module.css'

export default function Navigation({showMobileMenu = false}) {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allContentfulArtPage {
        nodes {
          slug
          title
        }
      }
      allContentfulStandardPage {
        nodes {
          slug
          title
        }
      }
    }
  `)


  return (
    <div className={`${showMobileMenu ? 'showMobileMenu' : ''} ${styles.sidebar}`}>
      <div className={styles.sidebarContent}>
        <nav role="navigation">

          <ul className={`${styles.navigationTop}`}>
            <Link className={styles.homeLink} to="/">Home</Link>
            {data.allContentfulArtPage.nodes.map((item, index) => {
              return <li className={styles.navigationItem} key={index}>
                <Link to={item.slug}>{item.title}</Link>
              </li>
            })}
          </ul>
          <ul className={styles.navigation}>
            {data.allContentfulStandardPage.nodes.map((item, index) => {
              return <li className={styles.navigationItem} key={index}>
                <Link to={item.slug}>{item.title}</Link>
              </li>
            })}
          </ul>
        </nav>
      </div>
    </div>
  )
}
