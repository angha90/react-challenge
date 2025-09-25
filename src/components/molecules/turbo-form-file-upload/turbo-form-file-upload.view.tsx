import { LabelInput } from '../../atoms'
import { FileUpload, useTurboFormContext } from '../../organisms'
import type { ITurboFormFileUploadProps } from './interfaces'

export const TurboFormFileUpload = ({
  label,
  className,
  name,
  testId
}: ITurboFormFileUploadProps) => {
  const { values, errors, setValues, validate } = useTurboFormContext()

  return (
    <div
      className={`flex flex-col gap-2 ${className}`}
      tabIndex={-1}
      onBlur={() => validate(name)}
    >
      {label && <LabelInput>{label}</LabelInput>}
      <FileUpload
        value={(values[name] as File[]) || []}
        onChange={(value) => setValues({ ...values, [name]: value })}
        invalid={!!errors?.[name]?.length}
      />
      {errors[name] &&
        errors[name].map((error) => (
          <LabelInput
            className="text-xs text-red-500 italic"
            testId={`${testId}-error`}
          >
            {error}
          </LabelInput>
        ))}
    </div>
  )
}
