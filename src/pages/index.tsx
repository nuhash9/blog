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
        {/* <section className="min-h-screen flex flex-col w-[20vw] text-right border-r-2 border-black pr-4">
          <header className="grow p-2">
            <h1 className="text-3xl font-bold">Thoughts</h1>
            <h3>of Nu</h3>
          </header>

          <nav className="flex flex-col grow gap-4 items-end">
            <Button>Home</Button>
            <Button>Posts</Button>
            <Button>Twitter</Button>
          </nav>
        </section> */}
      </main>
    </>
  );
};

export default Home;