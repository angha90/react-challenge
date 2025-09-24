import { render, screen } from '@testing-library/react'
import { LabelTitle } from './label-title.view'

describe('LabelTitle', () => {
  it('should render correctly', () => {
    render(<LabelTitle testId="label-title-test-id">Label</LabelTitle>)
    const label = screen.getByTestId('label-title-test-id')
    expect(label).toBeInTheDocument()
  })

  it('should render with correct content', () => {
    render(<LabelTitle testId="label-title-test-id">Label</LabelTitle>)
    const label = screen.getByTestId('label-title-test-id')
    expect(label).toHaveTextContent('Label')
  })

  it('should render with correct styles', () => {
    render(<LabelTitle testId="label-title-test-id">Label</LabelTitle>)
    const label = screen.getByTestId('label-title-test-id')
    expect(label).toHaveClass('text-2xl font-bold')
  })
})
