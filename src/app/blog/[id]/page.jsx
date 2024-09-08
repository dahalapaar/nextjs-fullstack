import React from "react"
import styles from "./page.module.css"
import Image from "next/image"

const BlogPost = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>title</h1>
          <p className={styles.desc}>Desc</p>
          <div className={styles.author}>
            <Image
              src=""
              alt=""
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>Apaar</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image src="" alt="" fill={true} className={styles.image} />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>This is a blog content</p>
      </div>
    </div>
  )
}

export default BlogPost
