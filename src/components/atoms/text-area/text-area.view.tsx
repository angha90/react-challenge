import type { ITextAreaProps } from './interfaces'

export const TextArea = ({
  rows = 5,
  testId,
  value,
  onChange
}: ITextAreaProps) => {
  return (
    <textarea
      data-testid={testId}
      rows={rows}
      className="w-full rounded-md border border-gray-300 px-3 py-2 shadow transition-colors duration-200 hover:border-orange-500 focus:border-orange-500 focus:shadow focus:outline-none"
      value={value}
      onChange={(e) => onChange?.(e.target.value)}
    />
  )
}
