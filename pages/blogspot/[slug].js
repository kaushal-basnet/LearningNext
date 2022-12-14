import { useRouter } from "next/router";
import React from "react";
import styles from "../../styles/Blog.module.css";
const Post = () => {
  const router = useRouter();
  const { slug } = router.query;
  return (
    <main className={styles.main}>
      <div className={styles.dummy}>
        <h2>Title of the page: {slug}</h2>
        <hr />
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam
          ipsum voluptatibus, est quod excepturi ipsam laudantium itaque, facere
          alias voluptas veniam, rerum totam eos velit. Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Facere, enim autem atque distinctio
          dicta, quod necessitatibus quo perspiciatis impedit quisquam
          inventore, odio blanditiis libero adipisci.
        </p>
      </div>
    </main>
  );
};
export default Post;
