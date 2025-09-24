import { InputText, LabelInput } from '../../atoms'
import { useTurboFormContext } from '../../organisms/turbo-form/contexts'
import type { ITurboFormInputTextProps } from './interfaces'

export const TurboFormInputText = ({
  label,
  className,
  testId,
  name
}: ITurboFormInputTextProps) => {
  const { values, setValues } = useTurboFormContext()
  console.log(values, name, values[name])
  return (
    <div data-testid={testId} className={`flex flex-col gap-2 ${className}`}>
      {label && <LabelInput testId={`${testId}-label`}>{label}</LabelInput>}
      <InputText
        testId={`${testId}-input`}
        value={(values[name] as string) || ''}
        onChange={(value) => {
          console.log(value)
          setValues({ ...values, [name]: value })
        }}
      />
    </div>
  )
}
