import Button from "./Button"

const Sidebar = () => {
  return (
    <section className="min-h-screen flex flex-col w-[20vw] text-right border-r-2 border-black pr-4">
      <header className="grow p-2">
        <h1 className="text-3xl font-bold">Thoughts</h1>
        <h3>of Nu</h3>
      </header>

      <nav className="flex flex-col grow gap-4 items-end">
        <Button>Home</Button>
        <Button>Posts</Button>
        <Button>Twitter</Button>
      </nav>
    </section>
  )
}

export default Sidebar