import { fireEvent, render, screen } from '@testing-library/react'
import { TextArea } from './text-area.view'

describe('TextArea', () => {
  it('should render correctly', () => {
    render(<TextArea testId="text-area-test-id" />)
    const textArea = screen.getByTestId('text-area-test-id')
    expect(textArea).toBeInTheDocument()
  })

  it('should render with correct content', () => {
    render(<TextArea testId="text-area-test-id" />)
    const textArea = screen.getByTestId('text-area-test-id')
    fireEvent.change(textArea, { target: { value: 'Hello' } })
    expect(textArea).toHaveTextContent('')
  })

  it('should render with correct styles', () => {
    render(<TextArea testId="text-area-test-id" />)
    const textArea = screen.getByTestId('text-area-test-id')
    expect(textArea).toHaveClass(
      'w-full rounded-md border border-gray-300 px-3 py-2 shadow transition-colors duration-200 hover:border-orange-500 focus:border-orange-500 focus:shadow focus:outline-none'
    )
  })

  it('should apply correct styles when focused', () => {
    render(<TextArea testId="text-area-test-id" />)
    const textArea = screen.getByTestId('text-area-test-id')
    textArea.focus()
    expect(textArea).toHaveFocus()
  })

  it('should render with correct default rows', () => {
    render(<TextArea testId="text-area-test-id" />)
    const textArea = screen.getByTestId('text-area-test-id')
    expect(textArea).toHaveAttribute('rows', '5')
  })

  it('should render with correct rows', () => {
    render(<TextArea testId="text-area-test-id" rows={10} />)
    const textArea = screen.getByTestId('text-area-test-id')
    expect(textArea).toHaveAttribute('rows', '10')
  })
})
