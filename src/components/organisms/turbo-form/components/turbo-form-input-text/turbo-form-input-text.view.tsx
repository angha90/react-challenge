import { InputText, LabelInput } from '@/components/atoms'
import { useTurboFormContext } from '../../contexts'
import type { ITurboFormInputTextProps } from './interfaces'
import { useTranslation } from 'react-i18next'

export const TurboFormInputText = ({
  label,
  className,
  testId,
  name
}: ITurboFormInputTextProps) => {
  const { values, setValues, validate, errors } = useTurboFormContext()
  const { t } = useTranslation()

  return (
    <div data-testid={testId} className={`flex flex-col gap-2 ${className}`}>
      {label && <LabelInput testId={`${testId}-label`}>{label}</LabelInput>}
      <InputText
        testId={`${testId}-input`}
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
