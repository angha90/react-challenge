import { render, screen } from '@testing-library/react'
import { AppHeader } from './app-header.view'

describe('AppHeader', () => {
  it('should render correctly', () => {
    render(<AppHeader testId="app-header-test-id" />)
    const appHeader = screen.getByTestId('app-header-test-id')
    expect(appHeader).toBeInTheDocument()
  })

  it('should render with correct styles', () => {
    render(<AppHeader testId="app-header-test-id" />)
    const appHeader = screen.getByTestId('app-header-test-id')
    expect(appHeader).toHaveClass('h-16 w-full bg-white')
  })

  it('should render with correct content', () => {
    render(<AppHeader testId="app-header-test-id" />)
    const appHeader = screen.getByTestId('app-header-test-id')
    expect(appHeader).toHaveTextContent('')
  })
})
