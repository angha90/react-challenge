import type { IFileUploadListItem } from "../../interfaces";

export const FileUploadListItem = ({
    file,
    onRemove,
  }: IFileUploadListItem) => {
    return (
      <div
        key={`${file.name}-${file.lastModified}-${file.size}`}
        className="flex gap-3 justify-between items-center p-3 rounded border hover:bg-gray-50"
      >
        <div className="flex gap-3 items-center min-w-0 text-left">
          {file.type?.startsWith('image/') ? (
            <img
              src={URL.createObjectURL(file)}
              alt={file.name}
              className="object-cover w-10 h-10 rounded border"
            />
          ) : (
            <div className="flex justify-center items-center w-10 h-10 text-gray-400 bg-gray-50 rounded border">
              <span className="text-lg">📎</span>
            </div>
          )}
          <div className="min-w-0">
            <div className="text-sm font-medium text-gray-800 truncate">
              {file.name}
            </div>
            <div className="text-xs text-gray-500">
              {(file.size / (1024 * 1024)).toFixed(2)} MB
            </div>
          </div>
        </div>
        <div className="flex gap-2 items-center shrink-0">
          <a
            href={URL.createObjectURL(file)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-3 py-1.5 text-xs font-medium text-blue-700 bg-blue-50 rounded hover:bg-blue-100"
          >
            View
          </a>
          <button
            type="button"
            onClick={() => onRemove(file)}
            aria-label={`Remove ${file.name}`}
            className="inline-flex items-center px-3 py-1.5 text-xs font-medium text-red-700 bg-red-50 rounded hover:bg-red-100"
          >
            Delete
          </button>
        </div>
      </div>
    );
  };