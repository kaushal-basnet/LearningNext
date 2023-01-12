import Link from "next/link";
import React, { useEffect, useState } from "react";
import styles from "../styles/Blog.module.css";
import * as fs from "node:fs";
import InfiniteScroll from "react-infinite-scroll-component";
// for accessing blogdata data
// Step 1: Read/Collect all the files from blogspot directory
// Step 2: Iterate and display them
const Blog = (props) => {
  const [blogs, setblogs] = useState(props.allBlogs);
  const [count, setcount] = useState(2);
  const fetchData = async () => {
    const countData = await fetch(
      `http://localhost:3000/api/blogs/?count=${count + 2}`
    );
    // initial data + 2 datas in every fetch
    setcount(count + 2);
    const slugCount = await countData.json();
    // data siplay through fetch
    setblogs(slugCount);
  };

  return (
    <main className={styles.main}>
      <div className={styles.dummy}>
        <InfiniteScroll
          dataLength={blogs.length} //This is important field to render the next data
          next={fetchData}
          // hasMore will be false if (props.allCount == blogs.length)=false and show the endMessage
          //     props.allCount,"= 18",blogs.length, "= +2+2+2 in every fetch until 18"
          hasMore={props.allCount !== blogs.length}
          loader={<h4>Loading...</h4>}
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
          {blogs.map((data) => (
            <div key={data.author}>
              <Link href={`/blogspot/${data.slug}`}>
                <h3>{data.title}</h3>
              </Link>
              <p>
                {data.metadesc.substr(0, 250)}...
                <Link
                  href={`/blogspot/${data.slug}`}
                  className={styles.readMore}
                >
                  Read more.
                </Link>
              </p>
            </div>
          ))}
        </InfiniteScroll>
      </div>
    </main>
  );
};
export async function getStaticProps(context) {
  // on getStaticProps data can't fetch through api so use logic
  let myfile;
  let allBlogs = [];

  let data = await fs.promises.readdir("blogdata");

  const allCount = data.length;
  // for showing 2 data
  for (let index = 0; index < 2; index++) {
    const item = data[index];

    myfile = await fs.promises.readFile("blogdata/" + item, "utf-8");

    allBlogs.push(JSON.parse(myfile));
  }

  return {
    props: { allBlogs, allCount },
  };
}
export default Blog;
