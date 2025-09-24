import type { ILabelTitleProps } from './interfaces'

export const LabelTitle = ({ children }: ILabelTitleProps) => {
  return <h1 className="text-2xl font-bold">{children}</h1>
}
