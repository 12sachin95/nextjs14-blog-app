import Image from "next/image";
import styles from "./contact.module.css";

export const metadata = {
  title: " Contact page",
  description: "Blog app by using nextjs 14",
};

const ContactPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src="/contact.png" alt="contact" fill></Image>
      </div>
      <div className={styles.formContainer}>
        <form className={styles.form}>
          <input type="text" placeholder="Name and surname"></input>
          <input type="text" placeholder="Email address"></input>
          <input type="text" placeholder="phone number (Optional)"></input>
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Message"
          ></textarea>
          <button>Send</button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
