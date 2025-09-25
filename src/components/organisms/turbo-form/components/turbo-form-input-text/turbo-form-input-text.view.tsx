import { InputText, LabelInput } from '@/components/atoms'
import { useTurboFormContext } from '../../contexts'
import type { ITurboFormInputTextProps } from './interfaces'

export const TurboFormInputText = ({
  label,
  className,
  testId,
  name
}: ITurboFormInputTextProps) => {
  const { values, setValues, validate, errors } = useTurboFormContext()
  return (
    <div data-testid={testId} className={`flex flex-col gap-2 ${className}`}>
      {label && <LabelInput testId={`${testId}-label`}>{label}</LabelInput>}
      <InputText
        testId={`${testId}-input`}
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
