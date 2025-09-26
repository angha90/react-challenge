import { fireEvent, screen } from '@testing-library/react'
import { vi } from 'vitest'
import { renderWithI18nAndTurboForm } from '@/utils'
import { TurboFormFileUpload } from './turbo-form-file-upload.view'
import * as TurboFormContexts from '../../contexts'

const mockSetValues = vi.fn()
const mockSetErrors = vi.fn()
const mockValidate = vi.fn()
const mockIsFormValid = vi.fn(() => true)
const mockResetForm = vi.fn()

vi.mock('../../contexts', async () => ({
  ...(await vi.importActual('../../contexts')),
  useTurboFormContext: vi.fn(() => ({
    values: { test: [], other: 'other' },
    setValues: mockSetValues,
    setErrors: mockSetErrors,
    errors: {},
    validate: mockValidate,
    isFormValid: mockIsFormValid,
    resetForm: mockResetForm
  }))
}))

describe('TurboFormFileUpload', () => {
  it('should render correctly', () => {
    renderWithI18nAndTurboForm(
      <TurboFormFileUpload
        testId="turbo-form-file-upload-test-id"
        name="test"
      />
    )
    expect(screen.getByText('No files uploaded')).toBeInTheDocument()
  })

  it('should render label when provided', () => {
    renderWithI18nAndTurboForm(
      <TurboFormFileUpload
        testId="turbo-form-file-upload-test-id"
        name="test"
        label="Upload docs"
      />
    )
    expect(screen.getByText('Upload docs')).toBeInTheDocument()
  })

  it('should call setValues and validate on change with merged values', () => {
    renderWithI18nAndTurboForm(
      <TurboFormFileUpload
        testId="turbo-form-file-upload-test-id"
        name="test"
      />
    )
    const file = new File(['content'], 'a.txt', { type: 'text/plain' })
    const input = screen.getByLabelText('Upload files') as HTMLInputElement
    Object.defineProperty(input, 'files', { value: [file] })
    fireEvent.change(input)

    expect(mockSetValues).toHaveBeenCalledWith({
      test: [file],
      other: 'other'
    })
    expect(mockValidate).toHaveBeenCalledWith('test', {
      test: [file],
      other: 'other'
    })
  })

  it('should render errors when present', () => {
    vi.mocked(TurboFormContexts).useTurboFormContext.mockReturnValue({
      values: { test: [] },
      setValues: mockSetValues,
      setErrors: mockSetErrors,
      errors: { test: ['required error', 'type error'] },
      validate: mockValidate,
      isFormValid: mockIsFormValid,
      resetForm: mockResetForm
    })

    renderWithI18nAndTurboForm(
      <TurboFormFileUpload
        testId="turbo-form-file-upload-test-id"
        name="test"
      />
    )

    const error1 = screen.getByTestId('turbo-form-file-upload-test-id-error-0')
    expect(error1).toBeInTheDocument()
    expect(error1).toHaveClass('text-xs text-red-500 italic')
    expect(error1).toHaveTextContent('required error')

    const error2 = screen.getByTestId('turbo-form-file-upload-test-id-error-1')
    expect(error2).toBeInTheDocument()
    expect(error2).toHaveClass('text-xs text-red-500 italic')
    expect(error2).toHaveTextContent('type error')
  })
})
