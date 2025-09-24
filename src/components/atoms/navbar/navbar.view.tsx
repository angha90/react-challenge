import type { INavbarProps } from './interfaces'

export const Navbar = ({ children }: INavbarProps) => {
  return <div className="h-16 w-full bg-white">{children}</div>
}
