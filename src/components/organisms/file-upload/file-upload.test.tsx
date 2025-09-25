import { screen, fireEvent } from '@testing-library/react'
import { vi } from 'vitest'
import { FileUpload } from './file-upload.view'
import { renderWithI18n } from '@/utils'

Object.defineProperty(URL, 'createObjectURL', {
  writable: true,
  value: vi.fn(() => 'mocked-object-url')
})

describe('FileUpload', () => {
  it('should render correctly', () => {
    renderWithI18n(<FileUpload testId="file-upload-test-id" />)
    const fileUpload = screen.getByTestId('file-upload-test-id')
    expect(fileUpload).toBeInTheDocument()
  })

  it('should render with correct styles', () => {
    renderWithI18n(<FileUpload testId="file-upload-test-id" />)
    const fileUpload = screen.getByTestId('file-upload-test-id')
    expect(fileUpload).toHaveClass(
      'flex w-full flex-col gap-4 rounded-md border border-gray-300 p-4 shadow transition-colors duration-200 hover:border-orange-500 focus:border-orange-500 focus:shadow focus:outline-none'
    )
  })

  it('should render with correct input', () => {
    renderWithI18n(<FileUpload testId="file-upload-test-id" />)
    const fileUploadInput = screen.getByTestId('file-upload-test-id-input')
    expect(fileUploadInput).toBeInTheDocument()
  })

  it('should render with correct list', () => {
    renderWithI18n(<FileUpload testId="file-upload-test-id" />)
    const fileUploadList = screen.getByTestId('file-upload-test-id-list')
    expect(fileUploadList).toBeInTheDocument()
  })

  it('should render with correct input and list', () => {
    renderWithI18n(
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

    renderWithI18n(
      <FileUpload
        testId="file-upload-test-id"
        value={[file1, file2]}
        onChange={onChange}
      />
    )

    const deleteButtons = screen.getAllByRole('button', { name: /remove/i })
    expect(deleteButtons).toHaveLength(2)

    fireEvent.click(deleteButtons[0])

    expect(onChange).toHaveBeenCalledWith([file2])
  })
})
