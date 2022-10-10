import type { NextPage } from "next";
import Head from "next/head";
import Button from "../components/Button";
import PageTitle from "../components/PageTitle";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Blog | Nuhash</title>
        <meta name="description" content="Things I am thinking about" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className="px-8 pt-4">
        {/* recent posts and random post button go here */}
        <PageTitle>Recent Posts</PageTitle>
      </main>
    </>
  );
};

export default Home;