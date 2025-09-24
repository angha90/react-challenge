import { FileUploadInput, FileUploadList } from './components'
import type { IFileUpload } from './interfaces'

export const FileUpload = ({ value = [], onChange }: IFileUpload) => {
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
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
    <div className="w-full max-w-md space-y-4 rounded-lg border p-4">
      <FileUploadInput onChange={handleFileChange} />
      <FileUploadList files={value} onRemove={removeFile} />
    </div>
  )
}
