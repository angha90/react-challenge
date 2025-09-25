import type { ChangeEvent } from 'react'

export interface IFileUploadInput {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
  onBlur?: () => void
  testId?: string
}

export interface IFileUploadList {
  files: File[]
  onRemove: (file: File) => void
  testId?: string
}

export interface IFileUploadListItem {
  file: File
  onRemove: (file: File) => void
  testId?: string
}

export interface IFileUpload {
  value?: File[]
  onChange?: (files: File[]) => void
  testId?: string
  invalid?: boolean
}
