import type { IFileUploadListItem } from '../../interfaces'

export const FileUploadListItem = ({ file, onRemove }: IFileUploadListItem) => {
  return (
    <div
      key={`${file.name}-${file.lastModified}-${file.size}`}
      className="flex items-center justify-between gap-3 rounded border p-3 hover:bg-gray-50"
    >
      <div className="flex min-w-0 items-center gap-3 text-left">
        {file.type?.startsWith('image/') ? (
          <img
            src={URL.createObjectURL(file)}
            alt={file.name}
            className="h-10 w-10 rounded border object-cover"
          />
        ) : (
          <div className="flex h-10 w-10 items-center justify-center rounded border bg-gray-50 text-gray-400">
            <span className="text-lg">📎</span>
          </div>
        )}
        <div className="min-w-0">
          <div className="truncate text-sm font-medium text-gray-800">
            {file.name}
          </div>
          <div className="text-xs text-gray-500">
            {(file.size / (1024 * 1024)).toFixed(2)} MB
          </div>
        </div>
      </div>
      <div className="flex shrink-0 items-center gap-2">
        <a
          href={URL.createObjectURL(file)}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center rounded bg-blue-50 px-3 py-1.5 text-xs font-medium text-blue-700 hover:bg-blue-100"
        >
          View
        </a>
        <button
          type="button"
          onClick={() => onRemove(file)}
          aria-label={`Remove ${file.name}`}
          className="inline-flex items-center rounded bg-red-50 px-3 py-1.5 text-xs font-medium text-red-700 hover:bg-red-100"
        >
          Delete
        </button>
      </div>
    </div>
  )
}
