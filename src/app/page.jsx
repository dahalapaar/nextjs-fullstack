import Image from "next/image"
import styles from "./page.module.css"
import Button from "@/components/button/Button"

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>
          Better design for your digital products
        </h1>
        <p className={styles.description}>
          Turning your ideas into Reality. We bring together the teams from the
          gloabl tech industry
        </p>
        <Button url="/portfolio" text="See Our Works" />
      </div>
      <div className={styles.item}>
        <Image
          src="/hero.png"
          alt="Home"
          width={400}
          height={300}
          className={styles.img}
        />
      </div>
    </div>
  )
}
