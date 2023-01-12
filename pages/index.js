import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>LEARNING NEXT</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>LearningNext</h1>
        {/* for staticside next image does not support */}
        {/* <Image src="/favicon.ico" className="img" height={120} width={120} /> */}
        <img src="/favicon.ico" className="img" height={120} width={120} />
        <p className={styles.description}>A blog for the new developer</p>

        <div className={styles.dummy}>
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
        </div>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
