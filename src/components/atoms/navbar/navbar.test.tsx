import { render, screen } from '@testing-library/react'
import { Navbar } from './navbar.view'

describe('Navbar', () => {
  it('should render correctly', () => {
    render(<Navbar testId="navbar-test-id">Navbar</Navbar>)
    const navbar = screen.getByTestId('navbar-test-id')
    expect(navbar).toBeInTheDocument()
  })

  it('should render with correct content', () => {
    render(<Navbar testId="navbar-test-id">Navbar</Navbar>)
    const navbar = screen.getByTestId('navbar-test-id')
    expect(navbar).toHaveTextContent('Navbar')
  })

  it('should render with correct styles', () => {
    render(<Navbar testId="navbar-test-id">Navbar</Navbar>)
    const navbar = screen.getByTestId('navbar-test-id')
    expect(navbar).toHaveClass('h-16 w-full bg-white')
  })
})
