import { render, screen } from '@testing-library/react'
import { TurboFormTextArea } from './turbo-form-text-area.view'

describe('TurboFormTextArea', () => {
  it('should render correctly', () => {
    render(
      <TurboFormTextArea testId="turbo-form-text-area-test-id" name="test" />
    )
    const turboFormTextArea = screen.getByTestId('turbo-form-text-area-test-id')
    expect(turboFormTextArea).toBeInTheDocument()
  })

  it('should not render text area label correctly', () => {
    render(
      <TurboFormTextArea testId="turbo-form-text-area-test-id" name="test" />
    )
    const turboFormTextAreaLabel = screen.queryByTestId(
      'turbo-form-text-area-test-id-label'
    )
    expect(turboFormTextAreaLabel).toBeNull()
  })

  it('should render text area label correctly', () => {
    render(
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
    render(
      <TurboFormTextArea testId="turbo-form-text-area-test-id" name="test" />
    )
    const turboFormTextAreaTextArea = screen.getByTestId(
      'turbo-form-text-area-test-id-textarea'
    )
    expect(turboFormTextAreaTextArea).toBeInTheDocument()
  })
})
