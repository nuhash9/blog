import Link from "next/link"
import Button from "./Button"

const Sidebar = () => {
  return (
    <section className="min-h-screen flex flex-col w-[20vw] min-w-fit text-right border-r-2 border-black pr-4">
      <header className="grow p-2">
        <h1 className="text-3xl font-bold">Thoughts</h1>
        <h3>of Nu</h3>
      </header>

      <nav className="flex flex-col grow gap-4 items-end">
        <Link href="/" passHref>
          <Button>Home</Button>
        </Link>
        <Link href="/posts" passHref>
          <Button>Posts</Button>
        </Link>
        <Link href="https://twitter.com/NuhashC" passHref>
          <Button>Twitter</Button>
        </Link>
      </nav>
    </section>
  )
}

export default Sidebar