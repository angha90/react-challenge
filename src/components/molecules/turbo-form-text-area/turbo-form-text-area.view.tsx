import { LabelInput, TextArea } from '../../atoms'
import type { ITurboFormTextAreaProps } from './interfaces'

export const TurboFormTextArea = ({
  label,
  className,
  rows,
  testId
}: ITurboFormTextAreaProps) => {
  return (
    <div data-testid={testId} className={`flex flex-col gap-2 ${className}`}>
      {label && <LabelInput testId={`${testId}-label`}>{label}</LabelInput>}
      <TextArea testId={`${testId}-textarea`} rows={rows} />
    </div>
  )
}
