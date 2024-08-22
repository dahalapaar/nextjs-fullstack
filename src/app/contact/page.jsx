import React from "react"
import styles from "./page.module.css"
import Image from "next/image"
import Button from "@/components/button/Button"

const Contact = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>Let's keep in touch</div>
      <div className={styles.content}>
        <div className={styles.imgcontainer}>
          <Image
            src="/contact.png"
            alt="contact"
            width="300"
            height="300"
            className={styles.img}
          />
        </div>
        <form className={styles.form}>
          <input placeholder="name" className={styles.input} />
          <input placeholder="email" className={styles.input} />
          <textarea
            placeholder="message"
            className={styles.textarea}
            cols="30"
            rows="10"
          ></textarea>
          <Button url="#" text="send" />
        </form>
      </div>
    </div>
  )
}

export default Contact
