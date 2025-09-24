import { LabelInput, TextArea } from "../../atoms"
import type { ITurboFormTextAreaProps } from "./interfaces"

export const TurboFormTextArea = ( { label, className, rows }: ITurboFormTextAreaProps ) => {
  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      {label && <LabelInput>{label}</LabelInput>}
      <TextArea rows={rows} />
    </div>
  )
}