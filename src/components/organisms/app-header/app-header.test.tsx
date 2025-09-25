import { fireEvent, screen } from '@testing-library/react'
import { AppHeader } from './app-header.view'
import { renderWithI18n } from '@/utils'
import i18n from '@/i18n'

describe('AppHeader', () => {
  it('should render correctly', () => {
    renderWithI18n(<AppHeader testId="app-header-test-id" />)
    const appHeader = screen.getByTestId('app-header-test-id')
    expect(appHeader).toBeInTheDocument()
  })

  it('should render with correct styles', () => {
    renderWithI18n(<AppHeader testId="app-header-test-id" />)
    const appHeader = screen.getByTestId('app-header-test-id')
    expect(appHeader).toHaveClass(
      'h-16 w-full bg-white flex items-center justify-between p-4'
    )
  })

  it('should render with correct logo', () => {
    renderWithI18n(<AppHeader testId="app-header-test-id" />)

    const logoContainer = screen.getByTestId(
      'app-header-test-id-logo-container'
    )
    expect(logoContainer).toBeInTheDocument()
    expect(logoContainer).toHaveClass('w-[150px]')

    const logo = screen.getByTestId('app-header-test-id-logo')
    expect(logo).toBeInTheDocument()
    expect(logo).toHaveClass('h-full w-full')
    expect(logo).toHaveAttribute('src', '/public/avantiologo.png')
    expect(logo).toHaveAttribute('alt', 'logo')
  })

  it('should render with correct language dropdown', () => {
    renderWithI18n(<AppHeader testId="app-header-test-id" />)
    const languageDropdownContainer = screen.getByTestId(
      'app-header-test-id-language-dropdown-container'
    )
    expect(languageDropdownContainer).toBeInTheDocument()
    expect(languageDropdownContainer).toHaveClass('w-[150px]')

    const languageDropdown = screen.getByTestId(
      'app-header-test-id-language-dropdown'
    )
    expect(languageDropdown).toBeInTheDocument()
    expect(languageDropdown).toHaveClass('w-full')
  })

  it('should render with correct language dropdown options', () => {
    renderWithI18n(<AppHeader testId="app-header-test-id" />)
    const languageDropdown = screen.getByTestId(
      'app-header-test-id-language-dropdown'
    )
    expect(languageDropdown).toHaveTextContent('Select an option')
    expect(languageDropdown).toHaveTextContent('English')
    expect(languageDropdown).toHaveTextContent('Spanish')
  })

  it('should change language dropdown value', () => {
    renderWithI18n(<AppHeader testId="app-header-test-id" />)
    const languageDropdown = screen.getByTestId(
      'app-header-test-id-language-dropdown'
    )
    fireEvent.change(languageDropdown, { target: { value: 'en' } })
    expect(languageDropdown).toHaveValue('en')
    expect(i18n.language).toBe('en')
    expect(languageDropdown).toHaveTextContent('Select an option')
    expect(languageDropdown).toHaveTextContent('English')
    expect(languageDropdown).toHaveTextContent('Spanish')

    fireEvent.change(languageDropdown, { target: { value: 'es' } })
    expect(i18n.language).toBe('es')
    expect(languageDropdown).toHaveTextContent('Seleccione una opción')
    expect(languageDropdown).toHaveTextContent('Inglés')
    expect(languageDropdown).toHaveTextContent('Español')
  })
})
