import Head from "next/head"
import { useRouter } from "next/router"

const PostPage = () => {
  const { slug } = useRouter().query
  const title = slug

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Things I am thinking about" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <div>
        <h2>{title}</h2>
      </div>
    </>
  )
}

export default PostPage