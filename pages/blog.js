import Link from "next/link";
import React, { useEffect, useState } from "react";
import styles from "../styles/Blog.module.css";

// for accessing blogdata data
// Step 1: Read/Collect all the files from blogspot directory
// Step 2: Iterate and display them
const Blog = (props) => {
  console.log(props);
  const [blogs, setblogs] = useState(props.allBlogs);

  return (
    <main className={styles.main}>
      <div className={styles.dummy}>
        {blogs.map((data) => (
          <div key={data.author}>
            <Link href={`/blogspot/${data.slug}`}>
              <h3>{data.title}</h3>
            </Link>
            <p>
              {data.content.substr(0, 150)}...
              <a href="/" className={styles.readMore}>
                Read more.
              </a>
            </p>
          </div>
        ))}
      </div>
    </main>
  );
};
export async function getServerSideProps(context) {
  let data = await fetch("http://localhost:3001/api/blogs");
  let allBlogs = await data.json();

  return {
    props: { allBlogs },
  };
}
export default Blog;
