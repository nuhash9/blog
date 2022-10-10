import { ReactNode } from "react"

const PageTitle = ({ children } : { children : ReactNode}) => {
  return (
    <h1 className="text-2xl border-b-4 border-b-yellow-200">{ children }</h1>
  )
}

export default PageTitle