import { render, screen } from '@testing-library/react'
import { CreateAccommodationFormSummarySection } from './create-accommodation-form-summary-section.view.'

describe('CreateAccommodationFormSummarySection', () => {
  it('should render correctly with correct styles', () => {
    render(
      <CreateAccommodationFormSummarySection title="Test Section">
        <div
          data-testid="test-child"
          className="text-sm font-semibold text-gray-700"
        >
          Test Content
        </div>
      </CreateAccommodationFormSummarySection>
    )

    const section = screen.getByTestId(
      'create-accommodation-form-summary-section-test-id'
    )
    expect(section).toHaveClass(
      'rounded-lg border border-gray-200 bg-white p-6 shadow-sm'
    )

    const titleContainer = screen.getByTestId(
      'create-accommodation-form-summary-section-title-container-test-id'
    )
    expect(titleContainer).toHaveClass(
      'mb-4 border-b border-gray-200 pb-2 text-lg font-bold text-gray-800'
    )

    const title = screen.getByTestId(
      'create-accommodation-form-summary-section-title-test-id'
    )
    expect(title).toHaveTextContent('Test Section')

    const childrenContainer = screen.getByTestId(
      'create-accommodation-form-summary-section-children-test-id'
    )
    expect(childrenContainer).toHaveClass('space-y-4')

    const child = screen.getByTestId('test-child')
    expect(child).toHaveClass('text-sm font-semibold text-gray-700')
  })

  it('should render the correct title', () => {
    render(
      <CreateAccommodationFormSummarySection title="Test Section">
        <div>Test Content</div>
      </CreateAccommodationFormSummarySection>
    )

    const title = screen.getByTestId(
      'create-accommodation-form-summary-section-title-test-id'
    )
    expect(title).toHaveTextContent('Test Section')
  })

  it('should render the correct children', () => {
    render(
      <CreateAccommodationFormSummarySection title="Test Section">
        <div
          data-testid="test-child"
          className="text-sm font-semibold text-gray-700"
        >
          Test Content
        </div>
      </CreateAccommodationFormSummarySection>
    )

    const child = screen.getByTestId('test-child')
    expect(child).toHaveTextContent('Test Content')
  })
})
