import { fireEvent, render, screen } from '@testing-library/react'
import { vi } from 'vitest'

import { FileUploadInput } from './file-upload-input.view'

describe('FileUploadInput', () => {
  it('should render correctly', () => {
    render(
      <FileUploadInput testId="file-upload-input-test-id" onChange={() => {}} />
    )
    const fileUploadInput = screen.getByTestId('file-upload-input-test-id')
    expect(fileUploadInput).toBeInTheDocument()
  })

  it('should render container with correct styles', () => {
    render(
      <FileUploadInput testId="file-upload-input-test-id" onChange={() => {}} />
    )
    const fileUploadInput = screen.getByTestId(
      'file-upload-input-test-id-container'
    )
    expect(fileUploadInput).toBeInTheDocument()
    expect(fileUploadInput).toHaveClass(
      'rounded-lg border border-dashed p-6 text-center'
    )
  })

  it('should render icon with correct styles', () => {
    render(
      <FileUploadInput testId="file-upload-input-test-id" onChange={() => {}} />
    )
    const fileUploadInput = screen.getByTestId('file-upload-input-test-id-icon')
    expect(fileUploadInput).toBeInTheDocument()
    expect(fileUploadInput).toHaveClass(
      'mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 text-gray-500'
    )
  })

  it('should render text with correct styles', () => {
    render(
      <FileUploadInput testId="file-upload-input-test-id" onChange={() => {}} />
    )
    const fileUploadInput = screen.getByTestId('file-upload-input-test-id-text')
    expect(fileUploadInput).toBeInTheDocument()
    expect(fileUploadInput).toHaveClass('mt-1 text-xs text-gray-500')
  })

  it('should render label with correct styles', () => {
    render(
      <FileUploadInput testId="file-upload-input-test-id" onChange={() => {}} />
    )
    const fileUploadInput = screen.getByTestId(
      'file-upload-input-test-id-label'
    )
    expect(fileUploadInput).toBeInTheDocument()
    expect(fileUploadInput).toHaveClass(
      'inline-block cursor-pointer rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700'
    )
  })

  it('should render label container with correct styles', () => {
    render(
      <FileUploadInput testId="file-upload-input-test-id" onChange={() => {}} />
    )
    const fileUploadInput = screen.getByTestId(
      'file-upload-input-test-id-label-container'
    )
    expect(fileUploadInput).toBeInTheDocument()
    expect(fileUploadInput).toHaveClass('mt-4')
  })

  it('should render label with correct content', () => {
    render(
      <FileUploadInput testId="file-upload-input-test-id" onChange={() => {}} />
    )
    const fileUploadInput = screen.getByTestId(
      'file-upload-input-test-id-label'
    )
    expect(fileUploadInput).toHaveTextContent('Upload files')
  })

  it('should render input with correct styles', () => {
    render(
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
    render(
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
})
