import Head from "next/head"
import PageTitle from "../../components/PageTitle"

const AllPosts = () => {
  return (
    <>
      <Head>
        <title>Posts | Nuhash</title>
        <meta name="description" content="Things I am thinking about" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <div className="px-8 pt-4">
        <PageTitle>Posts</PageTitle>
      </div>
    
    </>
  )
}

export default AllPosts