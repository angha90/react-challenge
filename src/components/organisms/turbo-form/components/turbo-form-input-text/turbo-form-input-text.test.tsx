import { render, screen } from '@testing-library/react'
import { I18nextProvider } from 'react-i18next'
import i18n from '../../../../../i18n'
import { TurboFormProvider } from '../../providers'
import { TurboFormInputText } from './turbo-form-input-text.view'

const renderWithProviders = (component: React.ReactElement) => {
  return render(
    <I18nextProvider i18n={i18n}>
      <TurboFormProvider>
        {component}
      </TurboFormProvider>
    </I18nextProvider>
  )
}

describe('TurboFormInputText', () => {
  it('should render correctly', () => {
    renderWithProviders(
      <TurboFormInputText testId="turbo-form-input-text-test-id" name="test" />
    )
    const turboFormInputText = screen.getByTestId(
      'turbo-form-input-text-test-id'
    )
    expect(turboFormInputText).toBeInTheDocument()
  })

  it('should not render input text label correctly', () => {
    renderWithProviders(
      <TurboFormInputText testId="turbo-form-input-text-test-id" name="test" />
    )
    const turboFormInputTextLabel = screen.queryByTestId(
      'turbo-form-input-text-test-id-label'
    )
    expect(turboFormInputTextLabel).toBeNull()
  })

  it('should render input text label correctly', () => {
    renderWithProviders(
      <TurboFormInputText
        testId="turbo-form-input-text-test-id"
        name="test"
        label="Test Label"
      />
    )
    const turboFormInputTextLabel = screen.getByTestId(
      'turbo-form-input-text-test-id-label'
    )
    expect(turboFormInputTextLabel).toBeInTheDocument()
  })

  it('should render input text correctly', () => {
    renderWithProviders(
      <TurboFormInputText testId="turbo-form-input-text-test-id" name="test" />
    )
    const turboFormInputTextInput = screen.getByTestId(
      'turbo-form-input-text-test-id-input'
    )
    expect(turboFormInputTextInput).toBeInTheDocument()
  })
})
