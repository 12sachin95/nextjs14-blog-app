import React from "react";
import styles from "./postUser.module.css";
import { getUser } from "@/lib/data";

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
      <span className={styles.detailTitle}>Author</span>
      <span className={styles.detailValue}>{user.name}</span>
    </div>
  );
};

export default PostUser;
