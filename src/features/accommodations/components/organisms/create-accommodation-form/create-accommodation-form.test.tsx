import { fireEvent, screen } from '@testing-library/react'
import { CreateAccommodationForm } from './create-accommodation-form.view'
import { renderWithI18nAndTurboForm } from '@/utils'
import { vi } from 'vitest'

const mockAlert = vi.fn()
Object.defineProperty(window, 'alert', {
  value: mockAlert,
  writable: true
})

const mockConsoleLog = vi.spyOn(console, 'log').mockImplementation(() => {})

Object.defineProperty(URL, 'createObjectURL', {
  value: vi.fn(() => 'mock-object-url'),
  writable: true
})

describe('CreateAccommodationForm', () => {
  beforeEach(() => {
    mockAlert.mockClear()
    mockConsoleLog.mockClear()
  })

  it('should render contrainer correctly with correct styles', () => {
    renderWithI18nAndTurboForm(<CreateAccommodationForm />)
    const createAccommodationFormContainer = screen.getByTestId(
      'create-accommodation-form-container-test-id'
    )
    expect(createAccommodationFormContainer).toBeInTheDocument()
    expect(createAccommodationFormContainer).toHaveClass(
      'flex h-full w-full flex-col gap-5 p-5'
    )
  })

  it('should render form correctly with correct styles', () => {
    renderWithI18nAndTurboForm(<CreateAccommodationForm />)
    const createAccommodationForm = screen.getByTestId(
      'create-accommodation-form-test-id'
    )
    expect(createAccommodationForm).toBeInTheDocument()
    expect(createAccommodationForm).toHaveClass(
      'flex h-full w-full flex-col gap-2'
    )
  })

  it('should render fields correctly with correct styles', () => {
    renderWithI18nAndTurboForm(<CreateAccommodationForm />)
    const createAccommodationFormFields = screen.getByTestId(
      'create-accommodation-form-test-id-fields'
    )
    expect(createAccommodationFormFields).toBeInTheDocument()
    expect(createAccommodationFormFields).toHaveClass('flex-1')
  })

  it('should render actions correctly with correct styles', () => {
    renderWithI18nAndTurboForm(<CreateAccommodationForm />)
    const createAccommodationFormActions = screen.getByTestId(
      'create-accommodation-form-test-id-actions'
    )
    expect(createAccommodationFormActions).toBeInTheDocument()
    expect(createAccommodationFormActions).toHaveClass(
      'flex gap-2 justify-end items-center gap-2'
    )
  })

  it('should fill all fields and and submit correctly', () => {
    renderWithI18nAndTurboForm(<CreateAccommodationForm />)

    const form = screen.getByTestId('create-accommodation-form-test-id')
    expect(form).toBeInTheDocument()

    const title = screen.getByTestId('create-accommodation-form-title')
    expect(title).toHaveTextContent('Accommodation')

    const name = screen.getByTestId(
      'create-accommodation-form-test-id-field-name-input'
    )
    fireEvent.focus(name)
    fireEvent.change(name, { target: { value: 'Manuel González' } })
    fireEvent.blur(name)

    const address = screen.getByTestId(
      'create-accommodation-form-test-id-field-address-input'
    )
    fireEvent.focus(address)
    fireEvent.change(address, { target: { value: 'Calle de la Paz, 123' } })
    fireEvent.blur(address)

    const description = screen.getByTestId(
      'create-accommodation-form-test-id-field-description-textarea'
    )
    fireEvent.focus(description)
    fireEvent.change(description, {
      target: { value: 'This is a description' }
    })
    fireEvent.blur(description)

    const type = screen.getByTestId(
      'create-accommodation-form-test-id-field-type-dropdown'
    )
    fireEvent.focus(type)
    fireEvent.change(type, { target: { value: 'house' } })
    fireEvent.blur(type)

    const photos = screen.getByTestId(
      'create-accommodation-form-test-id-field-photos-file-upload-input-input'
    )
    const file = new File(['test'], 'test.jpg', { type: 'image/jpeg' })
    fireEvent.focus(photos)
    fireEvent.change(photos, { target: { files: [file] } })
    fireEvent.blur(photos)

    const nextButton = screen.getByTestId(
      'create-accommodation-form-test-id-action-1'
    )
    fireEvent.click(nextButton)

    const ownerName = screen.getByTestId(
      'create-accommodation-form-test-id-field-ownerName-input'
    )
    fireEvent.focus(ownerName)
    fireEvent.change(ownerName, { target: { value: 'Manuel González' } })
    fireEvent.blur(ownerName)

    const ownerEmail = screen.getByTestId(
      'create-accommodation-form-test-id-field-ownerEmail-input'
    )
    fireEvent.focus(ownerEmail)
    fireEvent.change(ownerEmail, { target: { value: 'manuel@gmail.com' } })
    fireEvent.blur(ownerEmail)

    const ownerPhone = screen.getByTestId(
      'create-accommodation-form-test-id-field-ownerPhone-input'
    )
    fireEvent.focus(ownerPhone)
    fireEvent.change(ownerPhone, { target: { value: '1234567890' } })
    fireEvent.blur(ownerPhone)

    const nextButton2 = screen.getByTestId(
      'create-accommodation-form-test-id-action-1'
    )
    fireEvent.click(nextButton2)

    const summary = screen.getByTestId(
      'create-accommodation-form-summary-test-id'
    )
    expect(summary).toBeInTheDocument()

    const submitButton = screen.getByTestId(
      'create-accommodation-form-test-id-action-2'
    )
    fireEvent.click(submitButton)

    expect(mockAlert).toHaveBeenCalledWith(
      'The accommodation has been created successfully.'
    )
    expect(mockAlert).toHaveBeenCalledTimes(1)

    expect(mockConsoleLog).toHaveBeenCalledWith(
      'Submit payload',
      expect.objectContaining({
        name: 'Manuel González',
        address: 'Calle de la Paz, 123',
        description: 'This is a description',
        type: 'house',
        ownerName: 'Manuel González',
        ownerEmail: 'manuel@gmail.com',
        ownerPhone: '1234567890'
      })
    )
    expect(mockConsoleLog).toHaveBeenCalledTimes(1)
  })
})
