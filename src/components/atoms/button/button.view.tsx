import type { IButtonProps } from './interfaces'

export const Button = ({
  children,
  className,
  onClick,
  testId,
  disabled
}: IButtonProps) => {
  return (
    <button
      data-testid={testId}
      className={className}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
}
