import type { ILabelInputProps } from './interfaces'

export const LabelInput = ({
  children,
  testId,
  className = ''
}: ILabelInputProps) => {
  return (
    <label
      data-testid={testId}
      className={`text-sm font-medium text-gray-500 ${className}`}
    >
      {children}
    </label>
  )
}
