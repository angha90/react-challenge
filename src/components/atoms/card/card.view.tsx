import type { ICardProps } from './interfaces'

export const Card = ({ children, className = '', testId }: ICardProps) => {
  return (
    <div data-testid={testId} className={`bg-white ${className}`}>
      {children}
    </div>
  )
}
