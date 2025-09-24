import { render, screen } from '@testing-library/react'
import { LabelInput } from './label-input.view'

describe('LabelInput', () => {
  it('should render correctly', () => {
    render(<LabelInput testId="label-input-test-id">Label</LabelInput>)
    const label = screen.getByTestId('label-input-test-id')
    expect(label).toBeInTheDocument()
  })

  it('should render with correct content', () => {
    render(<LabelInput testId="label-input-test-id">Label</LabelInput>)
    const label = screen.getByTestId('label-input-test-id')
    expect(label).toHaveTextContent('Label')
  })

  it('should render with correct styles', () => {
    render(<LabelInput testId="label-input-test-id">Label</LabelInput>)
    const label = screen.getByTestId('label-input-test-id')
    expect(label).toHaveClass('text-sm font-medium text-gray-500')
  })
})
