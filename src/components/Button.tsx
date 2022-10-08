import { forwardRef, LegacyRef, ReactNode } from "react"

const Button = forwardRef<HTMLAnchorElement, any>(({ onClick, href, children } : {onClick : any, href : any, children : ReactNode}, ref : LegacyRef<HTMLAnchorElement>) => {
  return (
    <a href={href} onClick={onClick} ref={ref} className="w-4/5 p-2 pr-4 bg-green-100">
        { children }
    </a>
  )
})

export default Button