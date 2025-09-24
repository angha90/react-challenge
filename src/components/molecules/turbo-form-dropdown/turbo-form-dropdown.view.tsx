import { LabelInput, Dropdown } from '../../atoms'
import type { ITurboFormDropdownProps } from './interfaces'

export const TurboFormDropdown = ({
  label,
  className,
  options = [],
  placeholder,
  testId
}: ITurboFormDropdownProps) => {
  return (
    <div data-testid={testId} className={`flex flex-col gap-2 ${className}`}>
      {label && <LabelInput testId={`${testId}-label`}>{label}</LabelInput>}
      <Dropdown
        testId={`${testId}-dropdown`}
        options={options}
        placeholder={placeholder}
      />
    </div>
  )
}
