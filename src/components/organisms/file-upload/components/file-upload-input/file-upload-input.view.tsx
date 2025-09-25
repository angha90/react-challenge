import type { IFileUploadInput } from '../../interfaces'

export const FileUploadInput = ({
  onChange,
  testId,
  onBlur
}: IFileUploadInput) => {
  return (
    <div data-testid={testId}>
      <input
        data-testid={`${testId}-input`}
        type="file"
        id="fileInput"
        multiple
        className="hidden"
        onChange={onChange}
        onBlur={onBlur}
      />
      <div
        data-testid={`${testId}-container`}
        className="rounded-lg border border-dashed border-gray-300 p-6 text-center"
      >
        <div
          data-testid={`${testId}-icon`}
          className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 text-gray-500"
        >
          <span className="text-xl">📄</span>
        </div>
        <div
          data-testid={`${testId}-text`}
          className="mt-1 text-xs font-medium text-gray-500"
        >
          Please use the button below to upload your documents.
        </div>
        <div data-testid={`${testId}-label-container`} className="mt-4">
          <label
            htmlFor="fileInput"
            data-testid={`${testId}-label`}
            className="inline-block cursor-pointer rounded bg-orange-500 px-4 py-2 text-white hover:bg-orange-600"
          >
            Upload files
          </label>
        </div>
      </div>
    </div>
  )
}
