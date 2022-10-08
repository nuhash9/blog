import { ReactNode } from "react"

const Button = ({ children }: {children: ReactNode}) => {
  return (
    <div className="w-4/5 p-2 pr-4 bg-green-100">
      { children }
    </div>
  )
}

export default Button