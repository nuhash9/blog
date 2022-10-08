import type { NextPage } from "next";
import Head from "next/head";
import Button from "../components/Button";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Blog | Nuhash</title>
        <meta name="description" content="Things I am thinking about" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main>
        {/* recent posts and random post button go here */}
      </main>
    </>
  );
};

export default Home;