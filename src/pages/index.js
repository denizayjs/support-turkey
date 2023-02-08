import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Hero from "@/components/Hero";
import Description from "@/components/Description";
import Widget from "@/components/Widget";
import Footer from "@/components/Footer";
import Donate from "@/components/Donate";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Support Turkey</title>
        <meta name="description" content="Support Turkey" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.jpeg" />
      </Head>

      <main className={styles.main}>
        <Hero />
        <Description />
        <Widget />
        <Donate />
        <Footer />
      </main>
    </>
  );
}
