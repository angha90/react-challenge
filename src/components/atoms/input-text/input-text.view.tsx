import type { IInputTextProps } from './interfaces'

export const InputText = ({
  testId,
  value,
  onChange,
  onBlur,
  invalid
}: IInputTextProps) => {
  return (
    <input
      data-testid={testId}
      type="text"
      className={`w-full rounded-md border px-3 py-2 shadow transition-colors duration-200 hover:border-orange-500 focus:border-orange-500 focus:shadow focus:outline-none ${invalid ? 'border-red-500' : 'border-gray-300'}`}
      value={value}
      onChange={(e) => onChange?.(e.target.value)}
      onBlur={onBlur}
    />
  )
}
