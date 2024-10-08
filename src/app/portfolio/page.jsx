import React from "react"
import styles from "./page.module.css"
import Link from "next/link"

const Portfolio = () => {
  return (
    <div className={styles.container}>
      <div className={styles.Stitle}>Chose a gallery</div>
      <div className={styles.items}>
        <Link className={styles.item} href="/portfolio/illustrations">
          <span className={styles.title}>Illustrations</span>
        </Link>
        <Link className={styles.item} href="/portfolio/websites">
          <span className={styles.title}>Websites</span>
        </Link>
        <Link className={styles.item} href="/portfolio/applications">
          <span className={styles.title}>Applications</span>
        </Link>
      </div>
    </div>
  )
}

export default Portfolio
