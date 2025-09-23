import { InputText } from "../../atoms"
import { LabelInput } from "../../atoms/label-input/label-input.view"
import type { ITurboFormInputTextProps } from "./interfaces"

export const TurboFormInputText = ({ label, className }: ITurboFormInputTextProps) => {
  return (
    <div className={`flex flex-col gap-2 ${className}`}>
        <LabelInput>{label}</LabelInput>
        <InputText />
    </div>
  )
}