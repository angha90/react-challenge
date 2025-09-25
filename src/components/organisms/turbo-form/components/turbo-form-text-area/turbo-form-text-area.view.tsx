import { LabelInput, TextArea } from '@/components/atoms'
import { useTurboFormContext } from '../../contexts'
import type { ITurboFormTextAreaProps } from './interfaces'
import { useTranslation } from 'react-i18next'

export const TurboFormTextArea = ({
  label,
  className,
  rows,
  testId,
  name
}: ITurboFormTextAreaProps) => {
  const { values, errors, setValues, validate } = useTurboFormContext()
  const { t } = useTranslation()

  return (
    <div data-testid={testId} className={`flex flex-col gap-2 ${className}`}>
      {label && <LabelInput testId={`${testId}-label`}>{label}</LabelInput>}
      <TextArea
        testId={`${testId}-textarea`}
        rows={rows}
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
