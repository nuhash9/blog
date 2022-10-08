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

      <main className="container mx-auto min-h-screen flex flex-col">
        <header className=" self-start">
          <h1>thoughts</h1>
          <h3>of nu</h3>
        </header>

        <nav className="flex flex-col justify-center self-center">
          <div>Home</div>
          <div>Posts</div>
          <div>Twitter</div>
        </nav>
      </main>
    </>
  );
};

export default Home;