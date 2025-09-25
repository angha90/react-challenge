import { LabelInput } from '@/components/atoms'
import { FileUpload, useTurboFormContext } from '@/components/organisms'
import type { ITurboFormFileUploadProps } from './interfaces'
import { useTranslation } from 'react-i18next'

export const TurboFormFileUpload = ({
  label,
  className,
  name,
  testId
}: ITurboFormFileUploadProps) => {
  const { values, errors, setValues, validate } = useTurboFormContext()
  const { t } = useTranslation()

  const onChange = (value: File[]) => {
    const newValues = { ...values, [name]: value }
    setValues(newValues)
    validate(name, newValues)
  }

  return (
    <div className={`flex flex-col gap-2 ${className}`} tabIndex={-1}>
      {label && <LabelInput>{label}</LabelInput>}
      <FileUpload
        value={(values[name] as File[]) || []}
        onChange={onChange}
        invalid={!!errors?.[name]?.length}
      />
      {errors[name] &&
        errors[name].map((error, index) => (
          <LabelInput
            key={error + index}
            className="text-xs text-red-500 italic"
            testId={`${testId}-error`}
          >
            {t(error)}
          </LabelInput>
        ))}
    </div>
  )
}
