import type { INavbarProps } from './interfaces'

export const Navbar = ({ children, testId, className = '' }: INavbarProps) => {
  return (
    <div data-testid={testId} className={`h-16 w-full bg-white ${className}`}>
      {children}
    </div>
  )
}
