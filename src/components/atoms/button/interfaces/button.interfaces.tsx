import type { ReactNode } from 'react'

export interface IButtonProps {
  children: ReactNode
  className?: string
  onClick: () => void
  testId?: string
  disabled?: boolean
}
