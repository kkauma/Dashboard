import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import OpenNotify from "../components/OpenNotify";
import OpenWeather from "../components/OpenWeather";

// Home component
const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Kyle's Vercel Team Project</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Kyle's Dashboard</h1>

        <p className={styles.description}>
          Widgets below connect to the Open Notify, NASA, Weather, Stock and
          Spotify APIs
        </p>

        <div className={styles.grid}>
          <p className={styles.card}>
            Astronauts in space:
            <OpenNotify />
          </p>

          <p className={styles.card}>
            Weather in Half Moon Bay, CA:
            <OpenWeather />
          </p>

          <p className={styles.card}>Favorite Stocks:</p>

          <p className={styles.card}>Favorite Songs:</p>
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
};

export default Home;
