import { useTranslation } from 'react-i18next'
import type { IFileUploadList } from '../../interfaces'
import { FileUploadListItem } from '../file-upload-list-item'

export const FileUploadList = ({
  files = [],
  onRemove,
  testId
}: IFileUploadList) => {
  const { t } = useTranslation()
  const hasFiles = files.length > 0
  return (
    <div data-testid={testId}>
      {hasFiles ? (
        <div data-testid={`${testId}-files`} className="space-y-2">
          {files.map((file) => (
            <FileUploadListItem
              testId={`${testId}-item-${file.name}-${file.lastModified}-${file.size}`}
              key={`${file.name}-${file.lastModified}-${file.size}`}
              file={file}
              onRemove={onRemove}
            />
          ))}
        </div>
      ) : (
        <p
          data-testid={`${testId}-no-files`}
          className="text-center text-sm font-medium text-gray-500"
        >
          {t('uploadFile.noFiles')}
        </p>
      )}
    </div>
  )
}
