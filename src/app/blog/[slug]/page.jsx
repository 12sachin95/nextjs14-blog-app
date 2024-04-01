import Image from "next/image";
import styles from "./singlePost.module.css";
import PostUser from "@/components/postUser/PostUser";
import { Suspense } from "react";
import { getPost } from "@/lib/data";

// dummy api endpoint
// const getPost = async (slug) => {
//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/posts/${slug}`,
//     {
//       // cache: "no-store", // by default cache on but if we want latest ddata on each request then we can use this option
//       next: { revalidate: 3600 },
//     }
//   );
//   if (!res.ok) {
//     throw new Error("Something went wrong.");
//   }
//   return res.json();
// };

const SingleBlogPage = async ({ params }) => {
  const post = await getPost(params.slug);
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src="/post.png" alt="post" fill className={styles.img}></Image>
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{post.title}</h1>
        <div className={styles.detail}>
          <Image
            className={styles.avatar}
            src="/noavatar.png"
            alt="post"
            width={50}
            height={50}
          ></Image>
          <Suspense fallback={<div>Loading...</div>}>
            <PostUser userId={post.userId} />
          </Suspense>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>01.01.20022</span>
          </div>
        </div>
        <div className={styles.content}>{post.body}</div>
      </div>
    </div>
  );
};

export default SingleBlogPage;
