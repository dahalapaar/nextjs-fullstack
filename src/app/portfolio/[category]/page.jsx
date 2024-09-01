import React from "react"
import styles from "./page.module.css"
import Button from "@/components/button/Button"
import Image from "next/image"

const Category = ({ params }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.catTitle}>{params.category}</h1>
      <div className={styles.items}>
        <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.desc}>Desc</p>
          <Button text="See More" url="#" />
        </div>
        <div className={styles.imgContainer}>
          <Image
            src="/hero.png"
            alt="Home"
            width={300}
            height={300}
            className={styles.img}
          />
        </div>
      </div>
      <div className={styles.items}>
        <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.desc}>Desc</p>
          <Button text="See More" url="#" />
        </div>
        <div className={styles.imgContainer}>
          <Image
            src="/hero.png"
            alt="Home"
            width={300}
            height={300}
            className={styles.img}
          />
        </div>
      </div>
    </div>
  )
}

export default Category
