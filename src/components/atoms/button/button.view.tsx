import type { IButtonProps } from './interfaces'

export const Button = ({
  children,
  className,
  onClick,
  testId
}: IButtonProps) => {
  return (
    <button data-testid={testId} className={className} onClick={onClick}>
      {children}
    </button>
  )
}
