import type { ILabelInputProps } from './interfaces'

export const LabelInput = ({ children, testId }: ILabelInputProps) => {
  return (
    <label data-testid={testId} className="text-sm font-medium text-gray-500">
      {children}
    </label>
  )
}
