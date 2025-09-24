import { LabelInput } from '../../atoms'
import { FileUpload, useTurboFormContext } from '../../organisms'
import type { ITurboFormFileUploadProps } from './interfaces'

export const TurboFormFileUpload = ({
  label,

  className,
  name
}: ITurboFormFileUploadProps) => {
  const { values, setValues } = useTurboFormContext()
  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      {label && <LabelInput>{label}</LabelInput>}
      <FileUpload
        value={(values[name] as File[]) || []}
        onChange={(value) => setValues({ ...values, [name]: value })}
      />
    </div>
  )
}
