import { FileUploadList } from './file-upload-list.view'
import { render, screen } from '@testing-library/react'
import { vi } from 'vitest'

Object.defineProperty(URL, 'createObjectURL', {
  writable: true,
  value: vi.fn(() => 'mocked-object-url')
})

describe('FileUploadList', () => {
  it('should render correctly', () => {
    render(
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
    render(
      <FileUploadList
        testId="file-upload-list-test-id"
        files={[]}
        onRemove={() => {}}
      />
    )
    const fileUploadList = screen.getByTestId('file-upload-list-test-id')
    expect(fileUploadList).toBeInTheDocument()
    expect(fileUploadList).toHaveClass('space-y-2')
  })

  it('should render no files message correctly', () => {
    render(
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
    expect(fileUploadNoFiles).toHaveTextContent('No documents uploaded')
    expect(fileUploadNoFiles).toHaveClass('text-center text-sm text-gray-500')
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

    render(
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
