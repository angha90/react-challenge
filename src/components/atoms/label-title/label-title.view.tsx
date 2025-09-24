import type { ILabelTitleProps } from './interfaces'

export const LabelTitle = ({ children, testId }: ILabelTitleProps) => {
  return (
    <h1 data-testid={testId} className="text-2xl font-bold">
      {children}
    </h1>
  )
}
