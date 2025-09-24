import { LabelInput } from '../../atoms'
import { FileUpload } from '../../organisms'
import type { ITurboFormFileUploadProps } from './interfaces'

export const TurboFormFileUpload = ({
  label,
  value,
  onChange,
  className
}: ITurboFormFileUploadProps) => {
  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      {label && <LabelInput>{label}</LabelInput>}
      <FileUpload value={value} onChange={onChange} />
    </div>
  )
}
