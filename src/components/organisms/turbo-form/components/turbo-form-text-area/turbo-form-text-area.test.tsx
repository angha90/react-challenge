import { fireEvent, screen } from '@testing-library/react'
import { vi } from 'vitest'
import { renderWithI18nAndTurboForm } from '@/utils'
import { TurboFormTextArea } from './turbo-form-text-area.view'
import * as TurboFormContexts from '../../contexts'

const mockSetValues = vi.fn()
const mockSetErrors = vi.fn()
const mockValidate = vi.fn()
const mockIsFormValid = vi.fn(() => true)
const mockResetForm = vi.fn()

vi.mock('../../contexts', async () => ({
  ...(await vi.importActual('../../contexts')),
  useTurboFormContext: vi.fn(() => ({
    values: { test: 'hello', other: 'other' },
    setValues: mockSetValues,
    setErrors: mockSetErrors,
    errors: {},
    validate: mockValidate,
    isFormValid: mockIsFormValid,
    resetForm: mockResetForm
  }))
}))

describe('TurboFormTextArea', () => {
  it('should render correctly with correct styles', () => {
    renderWithI18nAndTurboForm(
      <TurboFormTextArea testId="turbo-form-text-area-test-id" name="test" />
    )
    const container = screen.getByTestId('turbo-form-text-area-test-id')
    expect(container).toBeInTheDocument()
    expect(container).toHaveClass('flex flex-col gap-2')
  })

  it('should not render text area label when not provided', () => {
    renderWithI18nAndTurboForm(
      <TurboFormTextArea testId="turbo-form-text-area-test-id" name="test" />
    )
    const label = screen.queryByTestId('turbo-form-text-area-test-id-label')
    expect(label).not.toBeInTheDocument()
  })

  it('should render text area label when provided', () => {
    renderWithI18nAndTurboForm(
      <TurboFormTextArea
        testId="turbo-form-text-area-test-id"
        name="test"
        label="Test Label"
      />
    )
    const label = screen.getByTestId('turbo-form-text-area-test-id-label')
    expect(label).toBeInTheDocument()
  })

  it('should render textarea and reflect value from context', () => {
    renderWithI18nAndTurboForm(
      <TurboFormTextArea testId="turbo-form-text-area-test-id" name="test" />
    )
    const textarea = screen.getByTestId('turbo-form-text-area-test-id-textarea')
    expect(textarea).toBeInTheDocument()
    expect(textarea).toHaveValue('hello')
  })

  it('should call setValues on change with merged values', () => {
    renderWithI18nAndTurboForm(
      <TurboFormTextArea testId="turbo-form-text-area-test-id" name="test" />
    )
    const textarea = screen.getByTestId('turbo-form-text-area-test-id-textarea')
    fireEvent.change(textarea, { target: { value: 'world' } })
    expect(mockSetValues).toHaveBeenCalledWith({
      test: 'world',
      other: 'other'
    })
  })

  it('should call validate on blur with current values', () => {
    renderWithI18nAndTurboForm(
      <TurboFormTextArea testId="turbo-form-text-area-test-id" name="test" />
    )
    const textarea = screen.getByTestId('turbo-form-text-area-test-id-textarea')
    fireEvent.blur(textarea)
    expect(mockValidate).toHaveBeenCalledWith('test', {
      test: 'hello',
      other: 'other'
    })
  })

  it('should mark textarea invalid and render errors when present', async () => {
    vi.mocked(TurboFormContexts).useTurboFormContext.mockReturnValue({
      values: { test: 'value' },
      setValues: mockSetValues,
      setErrors: mockSetErrors,
      errors: { test: ['required error'] },
      validate: mockValidate,
      isFormValid: mockIsFormValid,
      resetForm: mockResetForm
    })

    renderWithI18nAndTurboForm(
      <TurboFormTextArea testId="turbo-form-text-area-test-id" name="test" />
    )
    const textarea = screen.getByTestId('turbo-form-text-area-test-id-textarea')
    expect(textarea).toHaveClass('border-red-500')
    const error = screen.getByTestId('turbo-form-text-area-test-id-error')
    expect(error).toBeInTheDocument()
    expect(error).toHaveClass('text-xs text-red-500 italic')
    expect(error).toHaveTextContent('required error')
  })
})
