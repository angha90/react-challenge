import type { IFileUploadInput } from "../../interfaces";

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
        <div className="p-6 text-center rounded-lg border border-dashed">
          <div className="flex justify-center items-center mx-auto mb-3 w-12 h-12 text-gray-500 bg-gray-100 rounded-full">
            <span className="text-xl">📄</span>
          </div>
          <div className="mt-1 text-xs text-gray-500">
            Please use the button below to upload your documents.
          </div>
          <div className="mt-4">
            <label
              htmlFor="fileInput"
              className="inline-block px-4 py-2 text-white bg-blue-600 rounded cursor-pointer hover:bg-blue-700"
            >
              Upload files
            </label>
          </div>
        </div>
      </div>
    );
  };