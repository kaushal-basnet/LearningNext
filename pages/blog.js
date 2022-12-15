import Link from "next/link";
import React, { useEffect, useState } from "react";
import styles from "../styles/Blog.module.css";

// for accessing blogdata data
// Step 1: Read/Collect all the files from blogspot directory
// Step 2: Iterate and display them
const Blog = () => {
  // step 4: store parsed data
  const [blogs, setblogs] = useState([]);
  // step 3: render api data from blogs
  useEffect(() => {
    fetch("http://localhost:3001/api/blogs")
      .then((parse) => {
        // fetched data and return data with json parse
        return parse.json();
      })
      .then((parsedData) => {
        console.log(parsedData);
        setblogs(parsedData);
      });
  }, []);

  return (
    <main className={styles.main}>
      <div className={styles.dummy}>
        {/* step 5: Iterate api data  */}
        {blogs.map((data) => (
          <div  key={data.author}>
            <Link href={`/blogspot/${data.slug}`}>
              <h3>{data.title}</h3>
            </Link>
            <p>
              {data.content.substr(0, 150)}...<a href="/" className={styles.readMore}>Read more.</a>
            </p>
          </div>
        ))}
      </div>
    </main>
  );
};
export default Blog;
