import { Dropdown, LabelInput } from '@/components/atoms'
import type { ITurboFormDropdownProps } from './interfaces'
import { useTurboFormContext } from '../../contexts'
import { useTranslation } from 'react-i18next'

export const TurboFormDropdown = ({
  label,
  className,
  options = [],
  placeholder,
  testId,
  name
}: ITurboFormDropdownProps) => {
  const { values, setValues, errors, validate } = useTurboFormContext()
  const { t } = useTranslation()

  return (
    <div data-testid={testId} className={`flex flex-col gap-2 ${className}`}>
      {label && <LabelInput testId={`${testId}-label`}>{label}</LabelInput>}
      <Dropdown
        testId={`${testId}-dropdown`}
        options={options}
        placeholder={placeholder}
        value={(values[name] as string) || ''}
        onChange={(value) => setValues({ ...values, [name]: value })}
        onBlur={() => validate(name, values)}
        invalid={!!errors?.[name]?.length}
      />
      {errors[name] &&
        errors[name].map((error, index) => (
          <LabelInput
            key={error + index}
            className="text-xs text-red-500 italic"
            testId={`${testId}-error`}
          >
            {t(error)}
          </LabelInput>
        ))}
    </div>
  )
}
