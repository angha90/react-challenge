import { FileUploadList } from '@/components/organisms/file-upload/components'

interface ICreateAccommodationFormSummaryFieldProps {
  label: string
  value: string | File[]
  isFileList?: boolean
  specialValue?: string
}

export const CreateAccommodationFormSummaryField = ({
  label,
  value,
  isFileList,
  specialValue
}: ICreateAccommodationFormSummaryFieldProps) => {
  if (isFileList) {
    return (
      <div className="flex flex-col gap-2">
        <div className="text-sm font-semibold text-gray-700">{label}:</div>
        <FileUploadList files={value as File[]} />
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-1">
      <div className="text-sm font-semibold text-gray-700">{label}:</div>
      <div className="border-l-2 border-orange-200 pl-2 text-sm text-gray-900">
        {specialValue || (value as string)}
      </div>
    </div>
  )
}
