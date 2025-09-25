import { LabelInput, TextArea } from '@/components/atoms'
import { useTurboFormContext } from '../../contexts'
import type { ITurboFormTextAreaProps } from './interfaces'

export const TurboFormTextArea = ({
  label,
  className,
  rows,
  testId,
  name
}: ITurboFormTextAreaProps) => {
  const { values, errors, setValues, validate } = useTurboFormContext()

  return (
    <div data-testid={testId} className={`flex flex-col gap-2 ${className}`}>
      {label && <LabelInput testId={`${testId}-label`}>{label}</LabelInput>}
      <TextArea
        testId={`${testId}-textarea`}
        rows={rows}
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
