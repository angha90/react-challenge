import type { ICardProps } from './interfaces'

export const Card = ({ children, className = '' }: ICardProps) => {
  return <div className={`bg-white ${className}`}>{children}</div>
}
