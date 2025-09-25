import { render, screen } from '@testing-library/react'
import { TurboFormDropdown } from './turbo-form-dropdown.view'

describe('TurboFormDropdown', () => {
  it('should render correctly', () => {
    render(
      <TurboFormDropdown testId="turbo-form-dropdown-test-id" name="test" />
    )
    const turboFormDropdown = screen.getByTestId('turbo-form-dropdown-test-id')
    expect(turboFormDropdown).toBeInTheDocument()
  })

  it('should not render dropdown label correctly', () => {
    render(
      <TurboFormDropdown testId="turbo-form-dropdown-test-id" name="test" />
    )
    const turboFormDropdownLabel = screen.queryByTestId(
      'turbo-form-dropdown-test-id-label'
    )
    expect(turboFormDropdownLabel).not.toBeInTheDocument()
  })

  it('should render dropdown label correctly', () => {
    render(
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
    render(
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
})
