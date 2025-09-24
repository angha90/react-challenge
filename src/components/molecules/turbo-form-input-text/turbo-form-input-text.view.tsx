import { InputText, LabelInput } from '../../atoms'
import type { ITurboFormInputTextProps } from './interfaces'

export const TurboFormInputText = ({
  label,
  className,
  testId
}: ITurboFormInputTextProps) => {
  return (
    <div data-testid={testId} className={`flex flex-col gap-2 ${className}`}>
      {label && <LabelInput testId={`${testId}-label`}>{label}</LabelInput>}
      <InputText testId={`${testId}-input`} />
    </div>
  )
}
