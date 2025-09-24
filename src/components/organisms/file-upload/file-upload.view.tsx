import type { ChangeEvent } from 'react'
import { FileUploadInput, FileUploadList } from './components'
import type { IFileUpload } from './interfaces'

export const FileUpload = ({ value = [], onChange, testId }: IFileUpload) => {
  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = event.target.files
    if (!selectedFiles) return
    const newFiles = [...value, ...Array.from(selectedFiles)]
    onChange?.(newFiles)
  }

  const removeFile = (fileToRemove: File) => {
    const newFiles = value.filter(
      (f) =>
        !(
          f.name === fileToRemove.name &&
          f.lastModified === fileToRemove.lastModified &&
          f.size === fileToRemove.size
        )
    )
    onChange?.(newFiles)
  }

  return (
    <div
      data-testid={testId}
      className="flex w-full flex-col gap-4 rounded-md border border-gray-300 p-4 shadow transition-colors duration-200 hover:border-orange-500 focus:border-orange-500 focus:shadow focus:outline-none"
    >
      <FileUploadInput testId={`${testId}-input`} onChange={handleFileChange} />
      <FileUploadList
        testId={`${testId}-list`}
        files={value}
        onRemove={removeFile}
      />
    </div>
  )
}
