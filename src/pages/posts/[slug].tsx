import { useRouter } from "next/router"

const PostPage = () => {
  const { slug } = useRouter().query
  const title = slug

  return (
    <div>
      <h2>{title}</h2>
    </div>
  )
}

export default PostPage