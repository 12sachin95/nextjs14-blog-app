import PostCard from "@/components/postCard/PostCard";
import styles from "./blog.module.css";
import { getPosts } from "@/lib/data";

// dummy api endpoint
// const getPosts = async () => {
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
//     // cache: "no-store", // by default cache on but if we want latest ddata on each request then we can use this option
//     next: { revalidate: 3600 },
//   });
//   if (!res.ok) {
//     throw new Error("Something went wrong.");
//   }
//   return res.json();
// };

export const metadata = {
  title: "Blog App | Blog list page",
  description: "Blog app by using nextjs 14",
};

const BlogPage = async () => {
  const posts = await getPosts();
  return (
    <div className={styles.container}>
      {posts.map((post) => {
        return (
          <div className={styles.post} key={post.id}>
            <PostCard post={post} />
          </div>
        );
      })}
    </div>
  );
};

export default BlogPage;
