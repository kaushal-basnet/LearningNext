import Link from "next/link";
import React, { useEffect, useState } from "react";
import styles from "../styles/Blog.module.css";
import * as fs from "node:fs";

// for accessing blogdata data
// Step 1: Read/Collect all the files from blogspot directory
// Step 2: Iterate and display them
const Blog = (props) => {
  // console.log(props);
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
              {data.metadesc.substr(0, 150)}...
              <Link href={`/blogspot/${data.slug}`} className={styles.readMore}>
                Read more.
              </Link>
            </p>
          </div>
        ))}
      </div>
    </main>
  );
};
export async function getStaticProps(context) {
  // on getStaticProps data can't fetch through api so use logic
  let myfile;
  let allBlogs = [];
  // step 1: read blogdata
  let data = await fs.promises.readdir("blogdata");
  //  step 2:Read file inside blogdata like mapping with for loop
  for (let index = 0; index < data.length; index++) {
    // item = file inside blogdata
    const item = data[index];
    // now time to read file inside blogdata
    // data type = buffer(check with console). so use utf-8
    myfile = await fs.promises.readFile("blogdata/" + item, "utf-8");
    // parse the Json file to make object from string
    allBlogs.push(JSON.parse(myfile));
  }

  return {
    props: { allBlogs },
  };
}
export default Blog;
