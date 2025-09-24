import { LabelInput, Dropdown } from '../../atoms'
import { useTurboFormContext } from '../../organisms/turbo-form/contexts'
import type { ITurboFormDropdownProps } from './interfaces'

export const TurboFormDropdown = ({
  label,
  className,
  options = [],
  placeholder,
  testId,
  name
}: ITurboFormDropdownProps) => {
  const { values, setValues } = useTurboFormContext()
  return (
    <div data-testid={testId} className={`flex flex-col gap-2 ${className}`}>
      {label && <LabelInput testId={`${testId}-label`}>{label}</LabelInput>}
      <Dropdown
        testId={`${testId}-dropdown`}
        options={options}
        placeholder={placeholder}
        value={(values[name] as string) || ''}
        onChange={(value) => setValues({ ...values, [name]: value })}
      />
    </div>
  )
}
