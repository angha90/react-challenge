export interface IFileUploadInput {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export interface IFileUploadList {
  files: File[]
  onRemove: (file: File) => void
}

export interface IFileUploadListItem {
  file: File
  onRemove: (file: File) => void
}

export interface IFileUpload {
  value?: File[]
  onChange?: (files: File[]) => void
}
