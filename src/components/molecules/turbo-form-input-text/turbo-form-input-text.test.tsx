import { render, screen } from '@testing-library/react'
import { TurboFormInputText } from './turbo-form-input-text.view'

describe('TurboFormInputText', () => {
  it('should render correctly', () => {
    render(<TurboFormInputText testId="turbo-form-input-text-test-id" name="test" />)
    const turboFormInputText = screen.getByTestId(
      'turbo-form-input-text-test-id'
    )
    expect(turboFormInputText).toBeInTheDocument()
  })

  it('should not render input text label correctly', () => {
    render(<TurboFormInputText testId="turbo-form-input-text-test-id" name="test" />)
    const turboFormInputTextLabel = screen.queryByTestId(
      'turbo-form-input-text-test-id-label'
    )
    expect(turboFormInputTextLabel).toBeNull()
  })

  it('should render input text label correctly', () => {
    render(
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
    render(<TurboFormInputText testId="turbo-form-input-text-test-id" name="test" />)
    const turboFormInputTextInput = screen.getByTestId(
      'turbo-form-input-text-test-id-input'
    )
    expect(turboFormInputTextInput).toBeInTheDocument()
  })
})
