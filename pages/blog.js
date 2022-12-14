import Link from "next/link";
import React from "react";
import styles from "../styles/Blog.module.css";

// for accessing blogdata data
// Step 1: Read/Collect all the files from blogspot directory
// Step 2: Iterate and display them
const Blog = () => {
  return (
    <main className={styles.main}>
      <div className={styles.dummy}>
        <div className="blogItem">
          <Link href="/blogspot/learn-next">
            <h3>How to learn Javascript in 2022?</h3>
          </Link>
          <p>Javascript is the language used to design logic for the web.</p>
        </div>
        <div className="blogItem">
          <h3>How to learn Javascript in 2022?</h3>
          <p>Javascript is the language used to design logic for the web.</p>
        </div>
        <div className="blogItem">
          <h3>How to learn Javascript in 2022?</h3>
          <p>Javascript is the language used to design logic for the web.</p>
        </div>
        <div className="blogItem">
          <h3>How to learn Javascript in 2022?</h3>
          <p>Javascript is the language used to design logic for the web.</p>
        </div>
        p
      </div>
    </main>
  );
};
export default Blog;
