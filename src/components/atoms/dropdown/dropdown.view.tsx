import type { IDropdownProps } from './interfaces'

export const Dropdown = ({
  options = [],
  placeholder = 'Select an option',
  value,
  onChange,
  onBlur,
  testId,
  invalid
}: IDropdownProps) => {
  const arrowIcon =
    'bg-[url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTQgNkw4IDEwTDEyIDYiIHN0cm9rZT0iIzY2NjY2NiIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K")] bg-[length:16px] bg-[right_0.75rem_center] bg-no-repeat'
  return (
    <select
      data-testid={testId}
      className={`w-full appearance-none rounded-md border border-gray-300 bg-white px-3 py-2 pr-8 shadow transition-colors duration-200 hover:border-orange-500 focus:border-orange-500 focus:shadow focus:outline-none ${arrowIcon} ${invalid ? 'border-red-500' : 'border-gray-300'} `}
      value={value}
      onChange={(e) => onChange?.(e.target.value)}
      onBlur={onBlur}
    >
      <option value="" disabled>
        {placeholder}
      </option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  )
}
