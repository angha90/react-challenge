import { CreateAccommodation } from './create-accommodation.view'
import { screen } from '@testing-library/react'
import { renderWithI18n } from '@/utils'

describe('CreateAccommodation', () => {
  it('should render correctly with correct styles', () => {
    renderWithI18n(<CreateAccommodation />)
    const createAccommodation = screen.getByTestId(
      'create-accommodation-test-id'
    )
    expect(createAccommodation).toBeInTheDocument()
    expect(createAccommodation).toHaveClass(
      'flex w-full flex-1 items-center justify-center p-10'
    )
  })

  it('should render the create accommodation card with correct styles', () => {
    renderWithI18n(<CreateAccommodation />)
    const createAccommodationCard = screen.getByTestId(
      'create-accommodation-card-test-id'
    )
    expect(createAccommodationCard).toBeInTheDocument()
    expect(createAccommodationCard).toHaveClass(
      'flex h-full w-full flex-col lg:max-w-3xl'
    )
  })

  it('should render the create accommodation form correctly', () => {
    renderWithI18n(<CreateAccommodation />)
    const createAccommodationForm = screen.getByTestId(
      'create-accommodation-form-test-id'
    )
    expect(createAccommodationForm).toBeInTheDocument()
  })
})
