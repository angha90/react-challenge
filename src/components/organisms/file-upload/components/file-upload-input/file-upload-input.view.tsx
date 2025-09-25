import { useTranslation } from 'react-i18next'
import type { IFileUploadInput } from '../../interfaces'

export const FileUploadInput = ({
  onChange,
  testId,
  onBlur
}: IFileUploadInput) => {
  const { t } = useTranslation()
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
          {t('uploadFile.message')}
        </div>
        <div data-testid={`${testId}-label-container`} className="mt-4">
          <label
            htmlFor="fileInput"
            data-testid={`${testId}-label`}
            className="inline-block cursor-pointer rounded-full border border-2 border-gray-300 bg-white px-4 py-2 font-medium text-gray-500 hover:border-orange-500 hover:bg-orange-500 hover:text-white"
          >
            {t('uploadFile.label')}
          </label>
        </div>
      </div>
    </div>
  )
}
