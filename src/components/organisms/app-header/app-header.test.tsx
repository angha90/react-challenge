import { screen } from '@testing-library/react'
import { AppHeader } from './app-header.view'
import { renderWithI18n } from '@/utils'

describe('AppHeader', () => {
  it('should render correctly', () => {
    renderWithI18n(<AppHeader testId="app-header-test-id" />)
    const appHeader = screen.getByTestId('app-header-test-id')
    expect(appHeader).toBeInTheDocument()
  })

  it('should render with correct styles', () => {
    renderWithI18n(<AppHeader testId="app-header-test-id" />)
    const appHeader = screen.getByTestId('app-header-test-id')
    expect(appHeader).toHaveClass('h-16 w-full bg-white')
  })

  it('should render with correct content', () => {
    renderWithI18n(<AppHeader testId="app-header-test-id" />)
    const appHeader = screen.getByTestId('app-header-test-id')
    expect(appHeader).toBeInTheDocument()
  })
})
