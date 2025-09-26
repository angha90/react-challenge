import { screen } from '@testing-library/react'
import { CreateAccommodationFormSummary } from './create-accommodation-form-summary.view'
import { renderWithI18nAndTurboForm } from '@/utils'
import { vi } from 'vitest'

Object.defineProperty(URL, 'createObjectURL', {
  value: vi.fn(() => 'mock-object-url'),
  writable: true
})

const mockFormValues = {
  name: 'Test Accommodation',
  address: '123 Test Street',
  description: 'A beautiful test accommodation',
  type: 'house',
  photos: [
    new File(['test1'], 'test1.jpg', { type: 'image/jpeg' }),
    new File(['test2'], 'test2.png', { type: 'image/png' })
  ],
  ownerName: 'John Doe',
  ownerEmail: 'john@example.com',
  ownerPhone: '1234567890'
}

vi.mock('@/components/organisms', () => ({
  useTurboFormContext: () => ({
    values: mockFormValues
  })
}))

describe('CreateAccommodationFormSummary', () => {
  it('should render correctly with correct styles', () => {
    renderWithI18nAndTurboForm(<CreateAccommodationFormSummary />)

    const summary = screen.getByTestId(
      'create-accommodation-form-summary-test-id'
    )
    expect(summary).toBeInTheDocument()
    expect(summary).toHaveClass('space-y-6')
  })

  it('should render accommodation section title correctly', () => {
    renderWithI18nAndTurboForm(<CreateAccommodationFormSummary />)

    const accommodationTitles = screen.getAllByTestId(
      'create-accommodation-form-summary-section-title-test-id'
    )
    expect(accommodationTitles[0]).toHaveTextContent('Accommodation')
  })

  it('should render owner section title correctly', () => {
    renderWithI18nAndTurboForm(<CreateAccommodationFormSummary />)

    const ownerTitles = screen.getAllByTestId(
      'create-accommodation-form-summary-section-title-test-id'
    )
    expect(ownerTitles[1]).toHaveTextContent('Owner')
  })

  it('should render accommodation field labels and values correctly', () => {
    renderWithI18nAndTurboForm(<CreateAccommodationFormSummary />)

    const nameLabels = screen.getAllByText(/Name/)
    expect(nameLabels).toHaveLength(2)
    expect(screen.getByText('Test Accommodation')).toBeInTheDocument()

    expect(screen.getByText(/Address/)).toBeInTheDocument()
    expect(screen.getByText('123 Test Street')).toBeInTheDocument()

    expect(screen.getByText(/Description/)).toBeInTheDocument()
    expect(
      screen.getByText('A beautiful test accommodation')
    ).toBeInTheDocument()

    expect(screen.getByText(/Type/)).toBeInTheDocument()
    expect(screen.getByText('House')).toBeInTheDocument()

    expect(screen.getByText(/Photos/)).toBeInTheDocument()
  })

  it('should render owner field labels and values correctly', () => {
    renderWithI18nAndTurboForm(<CreateAccommodationFormSummary />)

    const nameLabels = screen.getAllByText(/Name/)
    expect(nameLabels).toHaveLength(2)
    expect(screen.getByText('John Doe')).toBeInTheDocument()

    expect(screen.getByText(/Email/)).toBeInTheDocument()
    expect(screen.getByText('john@example.com')).toBeInTheDocument()

    expect(screen.getByText(/Phone/)).toBeInTheDocument()
    expect(screen.getByText('1234567890')).toBeInTheDocument()
  })

  it('should render file list for photos', () => {
    renderWithI18nAndTurboForm(<CreateAccommodationFormSummary />)

    const fileList = screen.getByTestId(
      'create-accommodation-form-summary-file-list-file-test-id'
    )
    expect(fileList).toBeInTheDocument()
  })
})
