import { FileUploadList } from './file-upload-list.view'
import { screen } from '@testing-library/react'
import { vi } from 'vitest'
import { renderWithI18n } from '@/utils'

Object.defineProperty(URL, 'createObjectURL', {
  writable: true,
  value: vi.fn(() => 'mocked-object-url')
})

describe('FileUploadList', () => {
  it('should render correctly', () => {
    renderWithI18n(
      <FileUploadList
        testId="file-upload-list-test-id"
        files={[]}
        onRemove={() => {}}
      />
    )
    const fileUploadList = screen.getByTestId('file-upload-list-test-id')
    expect(fileUploadList).toBeInTheDocument()
  })

  it('should render with correct styles', () => {
    renderWithI18n(
      <FileUploadList
        testId="file-upload-list-test-id"
        files={[]}
        onRemove={() => {}}
      />
    )
    const fileUploadList = screen.getByTestId('file-upload-list-test-id')
    expect(fileUploadList).toBeInTheDocument()
  })

  it('should render no files message correctly', () => {
    renderWithI18n(
      <FileUploadList
        testId="file-upload-list-test-id"
        files={[]}
        onRemove={() => {}}
      />
    )

    const fileUploadNoFiles = screen.getByTestId(
      'file-upload-list-test-id-no-files'
    )
    expect(fileUploadNoFiles).toBeInTheDocument()
    expect(fileUploadNoFiles).toHaveTextContent('No files uploaded')
    expect(fileUploadNoFiles).toHaveClass(
      'flex h-16 items-center justify-center border border-dashed border-gray-300 p-2 text-center text-sm font-medium text-gray-300'
    )
    const fileUploadFiles = screen.queryByTestId(
      'file-upload-list-test-id-files'
    )
    expect(fileUploadFiles).not.toBeInTheDocument()
  })

  it('should render files correctly', () => {
    const file1 = new File(['test content 1'], 'test1.txt', {
      type: 'text/plain'
    })
    const file2 = new File(['test content 2'], 'test2.txt', {
      type: 'text/plain'
    })

    renderWithI18n(
      <FileUploadList
        testId="file-upload-list-test-id"
        files={[file1, file2]}
        onRemove={() => {}}
      />
    )

    const fileUploadFiles = screen.getByTestId('file-upload-list-test-id-files')
    expect(fileUploadFiles).toBeInTheDocument()

    const fileUploadNoFiles = screen.queryByTestId(
      'file-upload-list-test-id-no-files'
    )
    expect(fileUploadNoFiles).not.toBeInTheDocument()
  })
})
