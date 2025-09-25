import { render, screen } from '@testing-library/react'
import { I18nextProvider } from 'react-i18next'
import i18n from '../../../../../i18n'
import { TurboFormProvider } from '../../providers'
import { TurboFormDropdown } from './turbo-form-dropdown.view'

const renderWithProviders = (component: React.ReactElement) => {
  return render(
    <I18nextProvider i18n={i18n}>
      <TurboFormProvider>
        {component}
      </TurboFormProvider>
    </I18nextProvider>
  )
}

describe('TurboFormDropdown', () => {
  it('should render correctly', () => {
    renderWithProviders(
      <TurboFormDropdown testId="turbo-form-dropdown-test-id" name="test" />
    )
    const turboFormDropdown = screen.getByTestId('turbo-form-dropdown-test-id')
    expect(turboFormDropdown).toBeInTheDocument()
  })

  it('should not render dropdown label correctly', () => {
    renderWithProviders(
      <TurboFormDropdown testId="turbo-form-dropdown-test-id" name="test" />
    )
    const turboFormDropdownLabel = screen.queryByTestId(
      'turbo-form-dropdown-test-id-label'
    )
    expect(turboFormDropdownLabel).not.toBeInTheDocument()
  })

  it('should render dropdown label correctly', () => {
    renderWithProviders(
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
    renderWithProviders(
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
