import { fireEvent, render, screen } from '@testing-library/react'
import { vi } from 'vitest'

import { Button } from './button.view'

describe('Button', () => {
  it('should render correctly', () => {
    render(
      <Button testId="button-test-id" children="Save" onClick={() => {}} />
    )
    const button = screen.getByTestId('button-test-id')
    expect(button).toBeInTheDocument()
  })

  it('should call onClick when clicked', () => {
    const onClick = vi.fn()
    render(<Button testId="button-test-id" children="Save" onClick={onClick} />)
    const button = screen.getByTestId('button-test-id')
    fireEvent.click(button)
    expect(onClick).toHaveBeenCalled()
  })
})
