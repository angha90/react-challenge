import { fireEvent, render, screen } from '@testing-library/react'
import { InputText } from './input-text.view'

describe('InputText', () => {
  it('should render correctly', () => {
    render(<InputText testId="input-text-test-id" />)
    const input = screen.getByTestId('input-text-test-id')
    expect(input).toBeInTheDocument()
  })

  it('should render with correct input type', () => {
    render(<InputText testId="input-text-test-id" />)
    const input = screen.getByTestId('input-text-test-id')
    expect(input).toHaveAttribute('type', 'text')
  })

  it('should render with correct styles', () => {
    render(<InputText testId="input-text-test-id" />)
    const input = screen.getByTestId('input-text-test-id')
    expect(input).toHaveClass(
      'w-full',
      'rounded-md',
      'border',
      'border-gray-300',
      'px-3',
      'py-2',
      'shadow',
      'transition-colors',
      'duration-200',
      'hover:border-orange-500',
      'focus:border-orange-500',
      'focus:shadow',
      'focus:outline-none'
    )
  })

  it('should accept user input', () => {
    render(<InputText testId="input-text-test-id" />)
    const input = screen.getByTestId('input-text-test-id')
    fireEvent.change(input, { target: { value: 'Hello' } })
    expect(input).toHaveValue('Hello')
  })

  it('should apply correct styles when focused', () => {
    render(<InputText testId="input-text-test-id" />)
    const input = screen.getByTestId('input-text-test-id')
    input.focus()
    expect(input).toHaveFocus()
  })
})
