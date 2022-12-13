import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import styles1 from "../styles/Home1.module.css";

import styles2 from "../styles/Home2.module.css";

export default function Home() {
  // console.log(styles);
  return (
    <div className={styles.container}>
      <Head>
        <title>LEARNING NEXT</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav className={styles.mainnav}>
        <ul>
          <Link href="/">
            <li>Home</li>
          </Link>
          <Link href="/about">
            <li>About</li>
          </Link>
          <Link href="/blog">
            <li>Blog</li>
          </Link>
          <Link href="/contact">
            <li>Contact</li>
          </Link>
        </ul>
      </nav>
      <main className={styles.main}>
        <h1 className={styles.title}>LearningNext</h1>

        <p className={styles.description}>A blog for the new developer</p>

        <div className={styles2.check}>
          <h2>Popular Blogs</h2>
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
          <div className="blogItem">
            <h3>How to learn Javascript in 2022?</h3>
            <p>Javascript is the language used to design logic for the web.</p>
          </div>
          p
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
