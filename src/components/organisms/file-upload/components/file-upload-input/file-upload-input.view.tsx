import type { IFileUploadInput } from '../../interfaces'

export const FileUploadInput = ({ onChange }: IFileUploadInput) => {
  return (
    <div>
      <input
        type="file"
        id="fileInput"
        multiple
        className="hidden"
        onChange={onChange}
      />
      <div className="rounded-lg border border-dashed p-6 text-center">
        <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 text-gray-500">
          <span className="text-xl">📄</span>
        </div>
        <div className="mt-1 text-xs text-gray-500">
          Please use the button below to upload your documents.
        </div>
        <div className="mt-4">
          <label
            htmlFor="fileInput"
            className="inline-block cursor-pointer rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
          >
            Upload files
          </label>
        </div>
      </div>
    </div>
  )
}
