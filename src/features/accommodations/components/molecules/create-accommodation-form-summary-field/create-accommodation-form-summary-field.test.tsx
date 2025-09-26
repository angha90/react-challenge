import { screen } from '@testing-library/react'
import { CreateAccommodationFormSummaryField } from './create-accommodation-form-summary-field.view'
import { vi } from 'vitest'
import { renderWithI18n } from '@/utils'

Object.defineProperty(URL, 'createObjectURL', {
  value: vi.fn(() => 'mock-object-url'),
  writable: true
})

describe('CreateAccommodationFormSummaryField', () => {
  it('should render correctly with string value', () => {
    renderWithI18n(
      <CreateAccommodationFormSummaryField
        label="Test Label"
        value="Test Value"
      />
    )

    const container = screen.getByTestId(
      'create-accommodation-form-summary-value-container-test-id'
    )
    expect(container).toBeInTheDocument()
    expect(container).toHaveClass('flex flex-col gap-1')

    const label = screen.getByTestId(
      'create-accommodation-form-summary-value-label-test-id'
    )
    expect(label).toHaveTextContent('Test Label:')
    expect(label).toHaveClass('text-sm font-semibold text-gray-700')

    const value = screen.getByTestId(
      'create-accommodation-form-summary-value-test-id'
    )
    expect(value).toHaveTextContent('Test Value')
    expect(value).toHaveClass(
      'border-l-2 border-orange-200 pl-2 text-sm text-gray-900'
    )
  })

  it('should render correctly with special value', () => {
    renderWithI18n(
      <CreateAccommodationFormSummaryField
        label="Special Label"
        value="Original Value"
        specialValue="Special Value"
      />
    )

    const value = screen.getByTestId(
      'create-accommodation-form-summary-value-test-id'
    )
    expect(value).toHaveTextContent('Special Value')
  })

  it('should render file list when isFileList is true', () => {
    const mockFiles = [
      new File(['test1'], 'test1.jpg', { type: 'image/jpeg' }),
      new File(['test2'], 'test2.png', { type: 'image/png' })
    ]

    renderWithI18n(
      <CreateAccommodationFormSummaryField
        label="Photos"
        value={mockFiles}
        isFileList={true}
      />
    )

    const fileListContainer = screen.getByTestId(
      'create-accommodation-form-summary-file-list-container-test-id'
    )
    expect(fileListContainer).toBeInTheDocument()
    expect(fileListContainer).toHaveClass('flex flex-col gap-2')

    const fileListLabel = screen.getByTestId(
      'create-accommodation-form-summary-file-list-label-test-id'
    )
    expect(fileListLabel).toHaveTextContent('Photos:')
    expect(fileListLabel).toHaveClass('text-sm font-semibold text-gray-700')

    const fileList = screen.getByTestId(
      'create-accommodation-form-summary-file-list-file-test-id'
    )
    expect(fileList).toBeInTheDocument()
  })

  it('should render different labels correctly', () => {
    renderWithI18n(
      <CreateAccommodationFormSummaryField
        label="Different Label"
        value="Different Value"
      />
    )

    const label = screen.getByTestId(
      'create-accommodation-form-summary-value-label-test-id'
    )
    expect(label).toHaveTextContent('Different Label:')
  })

  it('should render different values correctly', () => {
    renderWithI18n(
      <CreateAccommodationFormSummaryField
        label="Test Label"
        value="Different Value"
      />
    )

    const value = screen.getByTestId(
      'create-accommodation-form-summary-value-test-id'
    )
    expect(value).toHaveTextContent('Different Value')
  })

  it('should prioritize specialValue over value', () => {
    renderWithI18n(
      <CreateAccommodationFormSummaryField
        label="Test Label"
        value="Original Value"
        specialValue="Override Value"
      />
    )

    const value = screen.getByTestId(
      'create-accommodation-form-summary-value-test-id'
    )
    expect(value).toHaveTextContent('Override Value')
    expect(value).not.toHaveTextContent('Original Value')
  })

  it('should render empty string value correctly', () => {
    renderWithI18n(
      <CreateAccommodationFormSummaryField label="Empty Label" value="" />
    )

    const value = screen.getByTestId(
      'create-accommodation-form-summary-value-test-id'
    )
    expect(value).toHaveTextContent('')
  })

  it('should render with empty file list', () => {
    renderWithI18n(
      <CreateAccommodationFormSummaryField
        label="Empty Files"
        value={[]}
        isFileList={true}
      />
    )

    const fileListContainer = screen.getByTestId(
      'create-accommodation-form-summary-file-list-container-test-id'
    )
    expect(fileListContainer).toBeInTheDocument()

    const fileList = screen.getByTestId(
      'create-accommodation-form-summary-file-list-file-test-id'
    )
    expect(fileList).toBeInTheDocument()
  })
})
