import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import styles from "../../styles/Blog.module.css";

// for accessing blogblog data
// Step 3: find the file corresponding to the slug
// Step 4: Populate them inside the page
const Post = (props) => {
  const [blog, setblog] = useState(props.myBlog);
  const router = useRouter();

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
export async function getServerSideProps(context) {
  console.log(context);
  const { slug } = context.query;
  let data = await fetch(`http://localhost:3001/api/getblogs?slug=${slug}`);
  let myBlog = await data.json();

  return {
    props: { myBlog },
  };
}
export default Post;
