import { InputText, LabelInput } from '../../atoms'
import type { ITurboFormInputTextProps } from './interfaces'

export const TurboFormInputText = ({
  label,
  className
}: ITurboFormInputTextProps) => {
  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      {label && <LabelInput>{label}</LabelInput>}
      <InputText />
    </div>
  )
}
