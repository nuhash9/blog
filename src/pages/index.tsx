import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Blog | Nuhash</title>
        <meta name="description" content="Things I am thinking about" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto min-h-screen">
        <h1>thoughts</h1>
        <h3>of nu</h3>
      </main>
    </>
  );
};

export default Home;