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
      <div
        data-testid="create-accommodation-form-summary-file-list-container-test-id"
        className="flex flex-col gap-2"
      >
        <div
          data-testid="create-accommodation-form-summary-file-list-label-test-id"
          className="text-sm font-semibold text-gray-700"
        >
          {label}:
        </div>
        <FileUploadList
          testId="create-accommodation-form-summary-file-list-file-test-id"
          files={value as File[]}
        />
      </div>
    )
  }

  return (
    <div
      data-testid="create-accommodation-form-summary-value-container-test-id"
      className="flex flex-col gap-1"
    >
      <div
        data-testid="create-accommodation-form-summary-value-label-test-id"
        className="text-sm font-semibold text-gray-700"
      >
        {label}:
      </div>
      <div
        data-testid="create-accommodation-form-summary-value-test-id"
        className="border-l-2 border-orange-200 pl-2 text-sm text-gray-900"
      >
        {specialValue || (value as string)}
      </div>
    </div>
  )
}
