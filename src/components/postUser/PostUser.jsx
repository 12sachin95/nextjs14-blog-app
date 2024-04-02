import React from "react";
import styles from "./postUser.module.css";
import { getUser } from "@/lib/data";
import Image from "next/image";

//dummy api endpoint
// const getUser = async (userId) => {
//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/users/${userId}`,
//     {
//       cache: "no-store", // by default cache on but if we want latest ddata on each request then we can use this option
//       next: { revalidate: 3600 },
//     }
//   );
//   if (!res.ok) {
//     throw new Error("Something went wrong.");
//   }
//   return res.json();
// };

const PostUser = async ({ userId }) => {
  const user = await getUser(userId);

  return (
    <div className={styles.detailText}>
      <Image
        src={user?.img ? user?.img : "/noavatar.png"}
        className={styles.avatar}
        alt="avatar"
        width={50}
        height={50}
      ></Image>
      <div className={styles.texts}>
        <span className={styles.detailTitle}>Author</span>
        <span className={styles.detailValue}>{user.username}</span>
      </div>
    </div>
  );
};

export default PostUser;
