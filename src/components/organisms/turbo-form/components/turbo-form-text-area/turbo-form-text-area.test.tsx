import { render, screen } from '@testing-library/react'
import { I18nextProvider } from 'react-i18next'
import i18n from '../../../../../i18n'
import { TurboFormProvider } from '../../providers'
import { TurboFormTextArea } from './turbo-form-text-area.view'

const renderWithProviders = (component: React.ReactElement) => {
  return render(
    <I18nextProvider i18n={i18n}>
      <TurboFormProvider>
        {component}
      </TurboFormProvider>
    </I18nextProvider>
  )
}

describe('TurboFormTextArea', () => {
  it('should render correctly', () => {
    renderWithProviders(
      <TurboFormTextArea testId="turbo-form-text-area-test-id" name="test" />
    )
    const turboFormTextArea = screen.getByTestId('turbo-form-text-area-test-id')
    expect(turboFormTextArea).toBeInTheDocument()
  })

  it('should not render text area label correctly', () => {
    renderWithProviders(
      <TurboFormTextArea testId="turbo-form-text-area-test-id" name="test" />
    )
    const turboFormTextAreaLabel = screen.queryByTestId(
      'turbo-form-text-area-test-id-label'
    )
    expect(turboFormTextAreaLabel).toBeNull()
  })

  it('should render text area label correctly', () => {
    renderWithProviders(
      <TurboFormTextArea
        testId="turbo-form-text-area-test-id"
        name="test"
        label="Test Label"
      />
    )
    const turboFormTextAreaLabel = screen.getByTestId(
      'turbo-form-text-area-test-id-label'
    )
    expect(turboFormTextAreaLabel).toBeInTheDocument()
  })

  it('should render text area correctly', () => {
    renderWithProviders(
      <TurboFormTextArea testId="turbo-form-text-area-test-id" name="test" />
    )
    const turboFormTextAreaTextArea = screen.getByTestId(
      'turbo-form-text-area-test-id-textarea'
    )
    expect(turboFormTextAreaTextArea).toBeInTheDocument()
  })
})
