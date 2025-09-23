import type { INavbarProps } from "./interfaces"

export const Navbar = ( { children }: INavbarProps) => {
  return (
    <div className="w-full h-16 bg-white">
      {children}
    </div>
  )
}