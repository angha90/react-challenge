import { renderWithI18n } from './utils'
import App from './App'
import { screen } from '@testing-library/react'

describe('App', () => {
  it('should render with correct styles', () => {
    renderWithI18n(<App />)
    const app = screen.getByTestId('app-test-id')
    expect(app).toBeInTheDocument()
    expect(app).toHaveClass(
      'flex min-h-screen flex-col bg-[linear-gradient(32deg,#f15f41_75%,#ffbbad_100%)]'
    )
  })

  it('should render the app header', () => {
    renderWithI18n(<App />)
    const appHeader = screen.getByTestId('app-header-test-id')
    expect(appHeader).toBeInTheDocument()
  })

  it('should render the create accommodation container with correct styles', () => {
    renderWithI18n(<App />)
    const createAccommodationContainer = screen.getByTestId(
      'app-create-accommodation-container-test-id'
    )
    expect(createAccommodationContainer).toBeInTheDocument()
    expect(createAccommodationContainer).toHaveClass('flex grow')
  })

  it('should render the create accommodation component', () => {
    renderWithI18n(<App />)
    const createAccommodation = screen.getByTestId(
      'create-accommodation-test-id'
    )
    expect(createAccommodation).toBeInTheDocument()
  })
})
