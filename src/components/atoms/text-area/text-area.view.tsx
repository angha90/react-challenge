import type { ITextAreaProps } from './interfaces'

export const TextArea = ({
  rows = 5,
  testId,
  value,
  onChange,
  onBlur,
  invalid
}: ITextAreaProps) => {
  return (
    <textarea
      data-testid={testId}
      rows={rows}
      className={`w-full rounded-md border px-3 py-2 shadow transition-colors duration-200 hover:border-orange-500 focus:border-orange-500 focus:shadow focus:outline-none ${invalid ? 'border-red-500' : 'border-gray-300'}`}
      value={value}
      onChange={(e) => onChange?.(e.target.value)}
      onBlur={onBlur}
    />
  )
}
