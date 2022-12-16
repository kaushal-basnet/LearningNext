import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import styles from "../../styles/Blog.module.css";

// for accessing blogblog data
// Step 3: find the file corresponding to the slug
// Step 4: Populate them inside the page
const Post = () => {
  const [blog, setblog] = useState([]);
  const router = useRouter();

  useEffect(() => {
    if (!router.isReady) return;
    const { slug } = router.query;
    fetch(`http://localhost:3001/api/getblogs?slug=${slug}`)
      .then((parse) => {
        return parse.json();
      })
      .then((parsed) => {
        setblog(parsed);
      });
  }, [router.isReady]);
  console.log(blog);
  return (
    <main className={styles.main}>
      <div className={styles.dummy} key={blog.slug}>
        <h2>Title of the page: {blog && blog.title}</h2>
        <hr />
        <p>{blog && blog.content}</p>
      </div>
    </main>
  );
};
export default Post;
