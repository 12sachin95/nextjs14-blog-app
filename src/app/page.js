import Image from "next/image";
import styles from "./home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Creative Thoughts Agency.</h1>
        <p className={styles.desc}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s.
        </p>
        <div className={styles.buttons}>
          <button className={styles.button}>Learn More</button>
          <button className={styles.button}>Contact</button>
        </div>
        <div className={styles.brands}>
          <Image
            src="/brands.png"
            alt="brands"
            fill
            className={styles.brandImg}
          ></Image>
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image
          src="/hero.gif"
          alt="hero"
          fill
          className={styles.heroImg}
        ></Image>
      </div>
    </div>
  );
}
