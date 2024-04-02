import Image from "next/image";
import styles from "./singlePost.module.css";
import PostUser from "@/components/postUser/PostUser";
import { Suspense } from "react";
// import { getPost } from "@/lib/data";

const getPostData = async (slug) => {
  const res = await fetch(`http://localhost:3000/api/blog/${slug}`, {
    // cache: "no-store", // by default cache on but if we want latest ddata on each request then we can use this option
    next: { revalidate: 3600 },
  });
  if (!res.ok) {
    throw new Error("Something went wrong.");
  }
  return res.json();
};
export const generateMetadata = async ({ params }) => {
  const { slug } = params;
  const post = await getPostData(slug);

  // FETCH without api
  // const post = await getPost(slug);

  return {
    title: post.title,
    description: post.desc,
  };
};
// export const metadata = {
//   title: "Blog page ",
//   description: "Blog app by using nextjs 14",
// };

const SingleBlogPage = async ({ params }) => {
  const post = await getPostData(params.slug);

  // FETCH without api
  // const post = await getPost(slug);

  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src={post.img} alt="post" fill className={styles.img}></Image>
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{post.title}</h1>
        <div className={styles.detail}>
          {post && (
            <Suspense fallback={<div>Loading...</div>}>
              <PostUser userId={post.userId} />
            </Suspense>
          )}
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>
              {post.createdAt.toString().slice(0, 16)}
            </span>
          </div>
        </div>
        <div className={styles.content}>{post.desc}</div>
      </div>
    </div>
  );
};

export default SingleBlogPage;
