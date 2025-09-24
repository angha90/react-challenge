import { render, screen, fireEvent } from '@testing-library/react'
import { vi } from 'vitest'
import { FileUpload } from './file-upload.view'

Object.defineProperty(URL, 'createObjectURL', {
  writable: true,
  value: vi.fn(() => 'mocked-object-url')
})

describe('FileUpload', () => {
  it('should render correctly', () => {
    render(<FileUpload testId="file-upload-test-id" />)
    const fileUpload = screen.getByTestId('file-upload-test-id')
    expect(fileUpload).toBeInTheDocument()
  })

  it('should render with correct styles', () => {
    render(<FileUpload testId="file-upload-test-id" />)
    const fileUpload = screen.getByTestId('file-upload-test-id')
    expect(fileUpload).toHaveClass(
      'w-full max-w-md space-y-4 rounded-lg border p-4'
    )
  })

  it('should render with correct input', () => {
    render(<FileUpload testId="file-upload-test-id" />)
    const fileUploadInput = screen.getByTestId('file-upload-test-id-input')
    expect(fileUploadInput).toBeInTheDocument()
  })

  it('should render with correct list', () => {
    render(<FileUpload testId="file-upload-test-id" />)
    const fileUploadList = screen.getByTestId('file-upload-test-id-list')
    expect(fileUploadList).toBeInTheDocument()
  })

  it('should render with correct input and list', () => {
    render(
      <FileUpload testId="file-upload-test-id" value={[]} onChange={() => {}} />
    )
    const fileUploadInput = screen.getByTestId('file-upload-test-id-input')
    const fileUploadList = screen.getByTestId('file-upload-test-id-list')
    expect(fileUploadInput).toBeInTheDocument()
    expect(fileUploadList).toBeInTheDocument()
  })

  it('should handle file removal correctly', () => {
    const onChange = vi.fn()
    const file1 = new File(['content1'], 'file1.txt', { type: 'text/plain' })
    const file2 = new File(['content2'], 'file2.txt', { type: 'text/plain' })

    render(
      <FileUpload
        testId="file-upload-test-id"
        value={[file1, file2]}
        onChange={onChange}
      />
    )

    const deleteButtons = screen.getAllByTestId(
      'file-upload-test-id-list-item-file1.txt-1758731180235-8-delete'
    )
    expect(deleteButtons).toHaveLength(2)

    fireEvent.click(deleteButtons[0])

    expect(onChange).toHaveBeenCalledWith([file2])
  })

  //   it('should remove the correct file when multiple files exist', () => {
  //     const onChange = vi.fn()
  //     const file1 = new File(['content1'], 'file1.txt', { type: 'text/plain' })
  //     const file2 = new File(['content2'], 'file2.txt', { type: 'text/plain' })
  //     const file3 = new File(['content3'], 'file3.txt', { type: 'text/plain' })

  //     render(
  //       <FileUpload
  //         testId="file-upload-test-id"
  //         value={[file1, file2, file3]}
  //         onChange={onChange}
  //       />
  //     )

  //     const deleteButtons = screen.getAllByRole('button', { name: /remove/i })
  //     expect(deleteButtons).toHaveLength(3)

  //     fireEvent.click(deleteButtons[1])

  //     expect(onChange).toHaveBeenCalledWith([file1, file3])
  //   })

  //   it('should handle removing the last file', () => {
  //     const onChange = vi.fn()
  //     const file = new File(['content'], 'file.txt', { type: 'text/plain' })

  //     render(
  //       <FileUpload
  //         testId="file-upload-test-id"
  //         value={[file]}
  //         onChange={onChange}
  //       />
  //     )

  //     const deleteButton = screen.getByRole('button', { name: /remove/i })
  //     fireEvent.click(deleteButton)

  //     expect(onChange).toHaveBeenCalledWith([])
  //   })

  //   it('should not call onChange when no files to remove', () => {
  //     const onChange = vi.fn()

  //     render(
  //       <FileUpload testId="file-upload-test-id" value={[]} onChange={onChange} />
  //     )

  //     const deleteButtons = screen.queryAllByRole('button', { name: /remove/i })
  //     expect(deleteButtons).toHaveLength(0)
  //     expect(onChange).not.toHaveBeenCalled()
  //   })
})
