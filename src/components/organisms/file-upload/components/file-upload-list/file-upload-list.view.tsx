import type { IFileUploadList } from '../../interfaces'
import { FileUploadListItem } from '../file-upload-list-item'

export const FileUploadList = ({ files, onRemove }: IFileUploadList) => {
  const hasFiles = files.length > 0
  return (
    <div className="space-y-2">
      {hasFiles ? (
        files.map((file) => (
          <FileUploadListItem
            key={`${file.name}-${file.lastModified}-${file.size}`}
            file={file}
            onRemove={onRemove}
          />
        ))
      ) : (
        <p className="text-center text-sm text-gray-500">
          No documents uploaded
        </p>
      )}
    </div>
  )
}
