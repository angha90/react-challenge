import { fireEvent, screen } from '@testing-library/react'
import { vi } from 'vitest'
import { renderWithI18nAndTurboForm } from '@/utils'
import { TurboFormInputText } from './turbo-form-input-text.view'
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

describe('TurboFormInputText', () => {
  it('should render correctly with correct styles', () => {
    renderWithI18nAndTurboForm(
      <TurboFormInputText testId="turbo-form-input-text-test-id" name="test" />
    )
    const container = screen.getByTestId('turbo-form-input-text-test-id')
    expect(container).toBeInTheDocument()
    expect(container).toHaveClass('flex flex-col gap-2')
  })

  it('should not render input text label when not provided', () => {
    renderWithI18nAndTurboForm(
      <TurboFormInputText testId="turbo-form-input-text-test-id" name="test" />
    )
    const label = screen.queryByTestId('turbo-form-input-text-test-id-label')
    expect(label).not.toBeInTheDocument()
  })

  it('should render input text label when provided', () => {
    renderWithI18nAndTurboForm(
      <TurboFormInputText
        testId="turbo-form-input-text-test-id"
        name="test"
        label="Test Label"
      />
    )
    const label = screen.getByTestId('turbo-form-input-text-test-id-label')
    expect(label).toBeInTheDocument()
  })

  it('should render input text and reflect value from context', () => {
    renderWithI18nAndTurboForm(
      <TurboFormInputText testId="turbo-form-input-text-test-id" name="test" />
    )
    const input = screen.getByTestId('turbo-form-input-text-test-id-input')
    expect(input).toBeInTheDocument()
    expect(input).toHaveValue('hello')
  })

  it('should call setValues on change with merged values', () => {
    renderWithI18nAndTurboForm(
      <TurboFormInputText testId="turbo-form-input-text-test-id" name="test" />
    )
    const input = screen.getByTestId('turbo-form-input-text-test-id-input')
    fireEvent.change(input, { target: { value: 'world' } })
    expect(mockSetValues).toHaveBeenCalledWith({
      test: 'world',
      other: 'other'
    })
  })

  it('should call validate on blur with current values', () => {
    renderWithI18nAndTurboForm(
      <TurboFormInputText testId="turbo-form-input-text-test-id" name="test" />
    )
    const input = screen.getByTestId('turbo-form-input-text-test-id-input')
    fireEvent.blur(input)
    expect(mockValidate).toHaveBeenCalledWith('test', {
      test: 'hello',
      other: 'other'
    })
  })

  it('should mark input invalid and render errors when present', async () => {
    vi.mocked(TurboFormContexts).useTurboFormContext.mockReturnValue({
      values: { test: 'test value' },
      setValues: mockSetValues,
      setErrors: mockSetErrors,
      errors: { test: ['required error'] },
      validate: mockValidate,
      isFormValid: mockIsFormValid,
      resetForm: mockResetForm
    })

    renderWithI18nAndTurboForm(
      <TurboFormInputText testId="turbo-form-input-text-test-id" name="test" />
    )
    const input = screen.getByTestId('turbo-form-input-text-test-id-input')
    expect(input).toHaveClass('border-red-500')
    const error = screen.getByTestId('turbo-form-input-text-test-id-error')
    expect(error).toBeInTheDocument()
    expect(error).toHaveClass('text-xs text-red-500 italic')
    expect(error).toHaveTextContent('required error')
  })
})
