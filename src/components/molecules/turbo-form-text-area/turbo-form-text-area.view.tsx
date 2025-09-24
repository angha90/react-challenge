import { LabelInput, TextArea } from '../../atoms'
import { useTurboFormContext } from '../../organisms/turbo-form/contexts'
import type { ITurboFormTextAreaProps } from './interfaces'

export const TurboFormTextArea = ({
  label,
  className,
  rows,
  testId,
  name
}: ITurboFormTextAreaProps) => {
  const { values, setValues } = useTurboFormContext()
  return (
    <div data-testid={testId} className={`flex flex-col gap-2 ${className}`}>
      {label && <LabelInput testId={`${testId}-label`}>{label}</LabelInput>}
      <TextArea
        testId={`${testId}-textarea`}
        rows={rows}
        value={(values[name] as string) || ''}
        onChange={(value) => setValues({ ...values, [name]: value })}
      />
    </div>
  )
}
