import type { IButtonProps } from './interfaces'

export const Button = ({ children, className, onClick }: IButtonProps) => {
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  )
}
