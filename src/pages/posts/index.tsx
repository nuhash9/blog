import Head from "next/head"
import PageTitle from "../../components/PageTitle"
import { Post } from "@prisma/client"
import { prisma } from "../../server/db/client"
import { GetServerSideProps } from "next"

export const getServerSideProps : GetServerSideProps = async () => {
  // data has to be stringified due to the date field that is not serialized in Next
  const dataAsString = JSON.stringify(await prisma.post.findMany())

  const posts = JSON.parse(dataAsString)

  return {
    props: { posts },
  }
}


const AllPosts = ({ posts } : { posts : Post[] }) => {
  return (
    <>
      <Head>
        <title>Posts | Nuhash</title>
        <meta name="description" content="Things I am thinking about" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <div className="px-8 pt-4">
        <PageTitle>Posts</PageTitle>
        {posts && posts.map((post) => <p key={post.id}>{post.title}</p>)}
      </div>
    
    </>
  )
}

export default AllPosts