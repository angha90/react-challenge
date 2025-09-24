import { render, screen } from '@testing-library/react'

import { Card } from './card.view'

describe('Card', () => {
  it('should render correctly', () => {
    render(<Card testId="card-test-id">Test</Card>)
    const card = screen.getByTestId('card-test-id')
    expect(card).toBeInTheDocument()
  })

  it('should render with correct content', () => {
    const cardProps = {
      testId: 'card-test-id',
      children: 'Card content'
    }
    render(<Card {...cardProps} />)
    const card = screen.getByTestId('card-test-id')
    expect(card).toHaveTextContent('Card content')
  })

  it('should render with correct styles', () => {
    const cardProps = {
      testId: 'card-test-id',
      children: 'Card content'
    }
    render(<Card {...cardProps} />)
    const card = screen.getByTestId('card-test-id')
    expect(card).toHaveClass('bg-white')
  })

  it('should render with correct class name', () => {
    const cardProps = {
      testId: 'card-test-id',
      children: 'Card content',
      className: 'test-class'
    }
    render(<Card {...cardProps} />)
    const card = screen.getByTestId('card-test-id')
    expect(card).toHaveClass('test-class')
  })
})
