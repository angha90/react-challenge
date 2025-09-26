import { fireEvent, screen } from '@testing-library/react'
import { vi } from 'vitest'
import { renderWithI18nAndTurboForm } from '@/utils'
import { TurboFormDropdown } from './turbo-form-dropdown.view'

const mockSetValues = vi.fn()
const mockSetErrors = vi.fn()
const mockValidate = vi.fn()
const mockIsFormValid = vi.fn(() => true)
const mockResetForm = vi.fn()

vi.mock('../../contexts', async () => ({
  ...(await vi.importActual('../../contexts')),
  useTurboFormContext: vi.fn(() => ({
    values: { test: '2', test2: '1' },
    setValues: mockSetValues,
    setErrors: mockSetErrors,
    errors: { test: ['required error', 'minLength error'] },
    validate: mockValidate,
    isFormValid: mockIsFormValid,
    resetForm: mockResetForm
  }))
}))

describe('TurboFormDropdown', () => {
  it('should render correctly with correct styles', () => {
    renderWithI18nAndTurboForm(
      <TurboFormDropdown testId="turbo-form-dropdown-test-id" name="test" />
    )
    const turboFormDropdown = screen.getByTestId('turbo-form-dropdown-test-id')
    expect(turboFormDropdown).toBeInTheDocument()
    expect(turboFormDropdown).toHaveClass('flex flex-col gap-2')
  })

  it('should not render dropdown label correctly', () => {
    renderWithI18nAndTurboForm(
      <TurboFormDropdown testId="turbo-form-dropdown-test-id" name="test" />
    )
    const turboFormDropdownLabel = screen.queryByTestId(
      'turbo-form-dropdown-test-id-label'
    )
    expect(turboFormDropdownLabel).not.toBeInTheDocument()
  })

  it('should render dropdown label correctly', () => {
    renderWithI18nAndTurboForm(
      <TurboFormDropdown
        testId="turbo-form-dropdown-test-id"
        name="test"
        label="Test Label"
      />
    )
    const turboFormDropdownLabel = screen.getByTestId(
      'turbo-form-dropdown-test-id-label'
    )
    expect(turboFormDropdownLabel).toBeInTheDocument()
  })

  it('should render dropdown with correct options', () => {
    renderWithI18nAndTurboForm(
      <TurboFormDropdown
        testId="turbo-form-dropdown-test-id"
        name="test"
        options={[{ value: '1', label: 'Option 1' }]}
      />
    )
    const turboFormDropdown = screen.getByTestId(
      'turbo-form-dropdown-test-id-dropdown'
    )
    expect(turboFormDropdown).toBeInTheDocument()
    expect(turboFormDropdown).toHaveTextContent('Option 1')
  })

  it('should render with correct value', () => {
    renderWithI18nAndTurboForm(
      <TurboFormDropdown
        testId="turbo-form-dropdown-test-id"
        name="test"
        options={[
          { value: '1', label: 'Option 1' },
          { value: '2', label: 'Option 2' }
        ]}
      />
    )
    const dropdown = screen.getByTestId('turbo-form-dropdown-test-id-dropdown')
    expect(dropdown).toHaveValue('2')
  })

  it('should execute onChange correctly when value is changed', () => {
    renderWithI18nAndTurboForm(
      <TurboFormDropdown
        testId="turbo-form-dropdown-test-id"
        name="test"
        options={[
          { value: '1', label: 'Option 1' },
          { value: '2', label: 'Option 2' }
        ]}
      />
    )
    const dropdown = screen.getByTestId('turbo-form-dropdown-test-id-dropdown')
    fireEvent.change(dropdown, { target: { value: '1' } })
    expect(mockSetValues).toHaveBeenCalledWith({ test: '1', test2: '1' })
  })

  it('should execute onBlur correctly when value is changed', () => {
    renderWithI18nAndTurboForm(
      <TurboFormDropdown testId="turbo-form-dropdown-test-id" name="test" />
    )
    const dropdown = screen.getByTestId('turbo-form-dropdown-test-id-dropdown')
    fireEvent.blur(dropdown)
    expect(mockValidate).toHaveBeenCalledWith('test', { test: '2', test2: '1' })
  })

  it('should render with correct errors', () => {
    renderWithI18nAndTurboForm(
      <TurboFormDropdown testId="turbo-form-dropdown-test-id" name="test" />
    )

    const error1 = screen.getByTestId('turbo-form-dropdown-test-id-error-0')
    expect(error1).toBeInTheDocument()
    expect(error1).toHaveClass('text-xs text-red-500 italic')
    expect(error1).toHaveTextContent('required error')

    const error2 = screen.getByTestId('turbo-form-dropdown-test-id-error-1')
    expect(error2).toBeInTheDocument()
    expect(error2).toHaveClass('text-xs text-red-500 italic')
    expect(error2).toHaveTextContent('minLength error')
  })
})
