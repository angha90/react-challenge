import type { INavbarProps } from './interfaces'

export const Navbar = ({ children, testId }: INavbarProps) => {
  return (
    <div data-testid={testId} className="h-16 w-full bg-white">
      {children}
    </div>
  )
}
