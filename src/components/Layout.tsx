import { ReactNode } from "react"
import Sidebar from "./Sidebar"

const Layout = ({ children } : {children : ReactNode}) => {
  return (
    <>
      <main className="flex container mx-auto">
        <Sidebar />
        { children }
      </main>
    </>
  )
}

export default Layout