import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>Blogs Company</div>
      <div className={styles.text}>
        Creative thoughts agency &#169; All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
