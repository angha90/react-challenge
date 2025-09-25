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
  const { values, setValues, errors, validate } = useTurboFormContext()
  return (
    <div data-testid={testId} className={`flex flex-col gap-2 ${className}`}>
      {label && <LabelInput testId={`${testId}-label`}>{label}</LabelInput>}
      <Dropdown
        testId={`${testId}-dropdown`}
        options={options}
        placeholder={placeholder}
        value={(values[name] as string) || ''}
        onChange={(value) => setValues({ ...values, [name]: value })}
        onBlur={() => validate(name)}
        invalid={!!errors?.[name]?.length}
      />
      {errors[name] &&
        errors[name].map((error) => (
          <LabelInput
            className="text-xs text-red-500 italic"
            testId={`${testId}-error`}
          >
            {error}
          </LabelInput>
        ))}
    </div>
  )
}
