import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import styles from "../../styles/Blog.module.css";
import * as fs from "node:fs";

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
export async function getStaticPaths() {
  return {
    paths: [
      { params: { slug: "learn-flask" } },
      { params: { slug: "learn-js" } },
      { params: { slug: "learn-next" } },
    ],
    // { fallback: false } means other routes should 404
    fallback: false, // can also be false or 'blocking'
  };
}
export async function getStaticProps(context) {
  const { slug } = context.params;
  let myBlog = await fs.promises.readFile(`blogdata/${slug}.json`, "utf-8");
  console.log(myBlog, "myblog");
  return {
    props: { myBlog: JSON.parse(myBlog) },
  };
}
export default Post;
