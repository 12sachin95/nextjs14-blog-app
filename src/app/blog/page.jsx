import PostCard from "@/components/postCard/PostCard";
import styles from "./blog.module.css";
// import { getPosts } from "@/lib/data";

const getPostsData = async () => {
  const res = await fetch("http://localhost:3000/api/blog", {
    // cache: "no-store", // by default cache on but if we want latest ddata on each request then we can use this option
    next: { revalidate: 3600 },
  });
  console.log(res);
  if (!res.ok) {
    throw new Error("Something went wrong.");
  }
  return res.json();
};

export const metadata = {
  title: "Blog App | Blog list page",
  description: "Blog app by using nextjs 14",
};

const BlogPage = async () => {
  //FETCh data with api
  const posts = await getPostsData();

  //FETCh data without api
  // const posts = await getPosts();

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
