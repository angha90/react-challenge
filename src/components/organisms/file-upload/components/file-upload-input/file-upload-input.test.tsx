import { fireEvent, screen } from '@testing-library/react'
import { vi } from 'vitest'
import { FileUploadInput } from './file-upload-input.view'
import { renderWithI18n } from '@/utils'

describe('FileUploadInput', () => {
  it('should render correctly', () => {
    renderWithI18n(
      <FileUploadInput testId="file-upload-input-test-id" onChange={() => {}} />
    )
    const fileUploadInput = screen.getByTestId('file-upload-input-test-id')
    expect(fileUploadInput).toBeInTheDocument()
  })

  it('should render input with correct styles', () => {
    renderWithI18n(
      <FileUploadInput testId="file-upload-input-test-id" onChange={() => {}} />
    )
    const fileUploadInput = screen.getByTestId(
      'file-upload-input-test-id-input'
    )
    expect(fileUploadInput).toBeInTheDocument()
    expect(fileUploadInput).toHaveClass('hidden')
    expect(fileUploadInput).toHaveAttribute('type', 'file')
    expect(fileUploadInput).toHaveAttribute('multiple')
  })

  it('should render input with correct onChange', () => {
    const onChange = vi.fn()
    renderWithI18n(
      <FileUploadInput testId="file-upload-input-test-id" onChange={onChange} />
    )
    const fileUploadInput = screen.getByTestId(
      'file-upload-input-test-id-input'
    )
    const file = new File(['test content'], 'test.txt', { type: 'text/plain' })
    fireEvent.change(fileUploadInput, {
      target: { files: [file] }
    })
    expect(onChange).toHaveBeenCalledWith(
      expect.objectContaining({
        target: expect.objectContaining({
          files: expect.arrayContaining([expect.any(File)])
        })
      })
    )
  })

  it('should render container with correct styles', () => {
    renderWithI18n(
      <FileUploadInput testId="file-upload-input-test-id" onChange={() => {}} />
    )
    const fileUploadInput = screen.getByTestId(
      'file-upload-input-test-id-container'
    )
    expect(fileUploadInput).toBeInTheDocument()
    expect(fileUploadInput).toHaveClass(
      'rounded-lg border border-dashed p-6 text-center border-gray-300'
    )
  })

  it('should render icon with correct styles', () => {
    renderWithI18n(
      <FileUploadInput testId="file-upload-input-test-id" onChange={() => {}} />
    )
    const fileUploadInputIcon = screen.getByTestId(
      'file-upload-input-test-id-icon'
    )
    expect(fileUploadInputIcon).toBeInTheDocument()
    expect(fileUploadInputIcon).toHaveClass(
      'mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 text-gray-500'
    )
    expect(fileUploadInputIcon).toHaveTextContent('📄')

    const iconSpan = fileUploadInputIcon.querySelector('span')
    expect(iconSpan).toBeInTheDocument()
    expect(iconSpan).toHaveClass('text-xl')
  })

  it('should render text with correct styles', () => {
    renderWithI18n(
      <FileUploadInput testId="file-upload-input-test-id" onChange={() => {}} />
    )
    const fileUploadInputText = screen.getByTestId(
      'file-upload-input-test-id-text'
    )
    expect(fileUploadInputText).toBeInTheDocument()
    expect(fileUploadInputText).toHaveClass(
      'mt-1 text-xs text-gray-500 font-medium'
    )
    expect(fileUploadInputText).toHaveTextContent(
      'Please, use the button below to upload your files.'
    )
  })

  it('should render label container with correct styles', () => {
    renderWithI18n(
      <FileUploadInput testId="file-upload-input-test-id" onChange={() => {}} />
    )
    const fileUploadInput = screen.getByTestId(
      'file-upload-input-test-id-label-container'
    )
    expect(fileUploadInput).toBeInTheDocument()
    expect(fileUploadInput).toHaveClass('mt-4')
  })

  it('should render label with correct styles and content', () => {
    renderWithI18n(
      <FileUploadInput testId="file-upload-input-test-id" onChange={() => {}} />
    )
    const fileUploadInput = screen.getByTestId(
      'file-upload-input-test-id-label'
    )
    expect(fileUploadInput).toBeInTheDocument()
    expect(fileUploadInput).toHaveClass(
      'inline-block cursor-pointer rounded-full border border-2 border-gray-300 bg-white px-4 py-2 font-medium text-gray-500 hover:border-orange-500 hover:bg-orange-500 hover:text-white'
    )
    expect(fileUploadInput).toHaveTextContent('Upload files')
  })
})
