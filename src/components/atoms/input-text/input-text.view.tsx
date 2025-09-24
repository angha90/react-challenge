import type { IInputTextProps } from './interfaces'

export const InputText = ({ testId, value, onChange }: IInputTextProps) => {
  return (
    <input
      data-testid={testId}
      type="text"
      className="w-full rounded-md border border-gray-300 px-3 py-2 shadow transition-colors duration-200 hover:border-orange-500 focus:border-orange-500 focus:shadow focus:outline-none"
      value={value}
      onChange={(e) => onChange?.(e.target.value)}
    />
  )
}
