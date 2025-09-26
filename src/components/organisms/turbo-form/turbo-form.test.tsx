import { screen, fireEvent, waitFor } from '@testing-library/react'
import { vi } from 'vitest'
import { renderWithI18nAndTurboForm } from '@/utils'
import { TurboForm } from './turbo-form.view'

Object.defineProperty(window, 'URL', {
  value: {
    createObjectURL: vi.fn(() => 'mock-object-url')
  },
  writable: true
})

describe('TurboForm', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  const mockFields = [
    {
      name: 'name',
      label: 'Name',
      type: 'text' as const,
      className: 'field-class'
    },
    {
      name: 'email',
      label: 'Email',
      type: 'text' as const
    },
    {
      name: 'message',
      label: 'Message',
      type: 'textarea' as const,
      rows: 4
    },
    {
      name: 'country',
      label: 'Country',
      type: 'dropdown' as const,
      options: [
        { value: 'us', label: 'United States' },
        { value: 'ca', label: 'Canada' }
      ],
      placeholder: 'Select country'
    },
    {
      name: 'documents',
      label: 'Documents',
      type: 'file' as const
    },
    {
      name: 'hidden',
      label: 'Hidden Field',
      type: 'text' as const,
      hidden: true
    }
  ]

  const mockActions = [
    {
      label: 'Submit',
      onClick: vi.fn(),
      className: 'submit-class'
    },
    {
      label: 'Reset',
      onClick: vi.fn(),
      disabled: false
    },
    {
      label: 'Hidden Action',
      onClick: vi.fn(),
      hidden: true
    }
  ]

  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('should render correctly with all field types', () => {
    renderWithI18nAndTurboForm(
      <TurboForm
        testId="turbo-form-test"
        fields={mockFields}
        actions={mockActions}
        className="form-class"
        fieldsClassName="fields-class"
        actionsClassName="actions-class"
      />
    )

    const form = screen.getByTestId('turbo-form-test')
    const fieldsContainer = screen.getByTestId('turbo-form-test-fields')
    const actionsContainer = screen.getByTestId('turbo-form-test-actions')

    expect(form).toBeInTheDocument()
    expect(form).toHaveClass('form-class')
    expect(fieldsContainer).toBeInTheDocument()
    expect(fieldsContainer).toHaveClass('fields-class')
    expect(actionsContainer).toBeInTheDocument()
    expect(actionsContainer).toHaveClass('actions-class')
  })

  it('should render text input fields', () => {
    renderWithI18nAndTurboForm(
      <TurboForm
        testId="turbo-form-test"
        fields={[mockFields[0], mockFields[1]]}
        actions={[]}
      />
    )

    const nameField = screen.getByTestId('turbo-form-test-field-name')
    const emailField = screen.getByTestId('turbo-form-test-field-email')

    expect(nameField).toBeInTheDocument()
    expect(emailField).toBeInTheDocument()
    expect(nameField).toHaveTextContent('Name')
    expect(emailField).toHaveTextContent('Email')
  })

  it('should render textarea field', () => {
    renderWithI18nAndTurboForm(
      <TurboForm
        testId="turbo-form-test"
        fields={[mockFields[2]]}
        actions={[]}
      />
    )

    const messageField = screen.getByTestId('turbo-form-test-field-message')

    expect(messageField).toBeInTheDocument()
    expect(messageField).toHaveTextContent('Message')
  })

  it('should render dropdown field', () => {
    renderWithI18nAndTurboForm(
      <TurboForm
        testId="turbo-form-test"
        fields={[mockFields[3]]}
        actions={[]}
      />
    )

    const countryField = screen.getByTestId('turbo-form-test-field-country')

    expect(countryField).toBeInTheDocument()
    expect(countryField).toHaveTextContent('Country')
  })

  it('should render file upload field', () => {
    renderWithI18nAndTurboForm(
      <TurboForm
        testId="turbo-form-test"
        fields={[mockFields[4]]}
        actions={[]}
      />
    )

    const documentsField = screen.getByTestId('turbo-form-test-field-documents')

    expect(documentsField).toBeInTheDocument()
    expect(documentsField).toHaveTextContent('Documents')
  })

  it('should not render hidden fields', () => {
    renderWithI18nAndTurboForm(
      <TurboForm
        testId="turbo-form-test"
        fields={[mockFields[5]]}
        actions={[]}
      />
    )

    const hiddenField = screen.queryByTestId('turbo-form-test-field-hidden')
    const hiddenFieldText = screen.queryByText('Hidden Field')

    expect(hiddenField).not.toBeInTheDocument()
    expect(hiddenFieldText).not.toBeInTheDocument()
  })

  it('should render action buttons', () => {
    renderWithI18nAndTurboForm(
      <TurboForm testId="turbo-form-test" fields={[]} actions={mockActions} />
    )

    const submitButton = screen.getByTestId('turbo-form-test-action-0')
    const resetButton = screen.getByTestId('turbo-form-test-action-1')

    expect(submitButton).toBeInTheDocument()
    expect(submitButton).toHaveClass('submit-class')
    expect(submitButton).toHaveTextContent('Submit')
    expect(resetButton).toBeInTheDocument()
    expect(resetButton).toHaveTextContent('Reset')
    expect(resetButton).not.toBeDisabled()
  })

  it('should not render hidden actions', () => {
    renderWithI18nAndTurboForm(
      <TurboForm testId="turbo-form-test" fields={[]} actions={mockActions} />
    )

    const hiddenAction = screen.queryByTestId('turbo-form-test-action-2')

    expect(hiddenAction).not.toBeInTheDocument()
  })

  it('should call action onClick when button is clicked', () => {
    const submitAction = vi.fn()
    const resetAction = vi.fn()

    renderWithI18nAndTurboForm(
      <TurboForm
        testId="turbo-form-test"
        fields={[]}
        actions={[
          { label: 'Submit', onClick: submitAction },
          { label: 'Reset', onClick: resetAction }
        ]}
      />
    )

    const submitActionButton = screen.getByTestId('turbo-form-test-action-0')
    const resetActionButton = screen.getByTestId('turbo-form-test-action-1')

    fireEvent.click(submitActionButton)
    expect(submitAction).toHaveBeenCalledTimes(1)

    fireEvent.click(resetActionButton)
    expect(resetAction).toHaveBeenCalledTimes(1)
  })

  it('should render disabled action button', () => {
    renderWithI18nAndTurboForm(
      <TurboForm
        testId="turbo-form-test"
        fields={[]}
        actions={[
          {
            label: 'Disabled Button',
            onClick: vi.fn(),
            disabled: true
          }
        ]}
      />
    )

    const disabledButton = screen.getByTestId('turbo-form-test-action-0')

    expect(disabledButton).toBeInTheDocument()
    expect(disabledButton).toBeDisabled()
  })

  it('should render custom template field', () => {
    const customTemplate = <div data-testid="custom-field">Custom Field</div>

    renderWithI18nAndTurboForm(
      <TurboForm
        testId="turbo-form-test"
        fields={[
          {
            name: 'custom',
            template: customTemplate
          }
        ]}
        actions={[]}
      />
    )

    const customField = screen.getByTestId('custom-field')
    const customFieldText = screen.getByText('Custom Field')

    expect(customField).toBeInTheDocument()
    expect(customField).toHaveTextContent('Custom Field')
    expect(customFieldText).toBeInTheDocument()
    expect(customFieldText).toHaveTextContent('Custom Field')
  })

  it('should handle unknown field type by returning null', () => {
    renderWithI18nAndTurboForm(
      <TurboForm
        testId="turbo-form-test"
        fields={[
          {
            name: 'unknown',
            label: 'Unknown',
            type: 'unknown' as never
          }
        ]}
        actions={[]}
      />
    )

    const unknownField = screen.queryByTestId('turbo-form-test-field-unknown')

    expect(unknownField).not.toBeInTheDocument()
  })

  it('should update form values when inputs change', async () => {
    renderWithI18nAndTurboForm(
      <TurboForm
        testId="integration-test"
        fields={[
          { name: 'name', label: 'Name', type: 'text' },
          { name: 'email', label: 'Email', type: 'text' }
        ]}
        actions={[]}
      />
    )

    const nameInput = screen.getByTestId('integration-test-field-name-input')
    const emailInput = screen.getByTestId('integration-test-field-email-input')

    fireEvent.change(nameInput, { target: { value: 'John Doe' } })
    await waitFor(() => {
      expect(nameInput).toHaveValue('John Doe')
    })

    fireEvent.change(emailInput, { target: { value: 'john@example.com' } })
    await waitFor(() => {
      expect(emailInput).toHaveValue('john@example.com')
    })
  })

  it('should handle dropdown selection', async () => {
    renderWithI18nAndTurboForm(
      <TurboForm
        testId="integration-test"
        fields={[
          {
            name: 'country',
            label: 'Country',
            type: 'dropdown',
            options: [
              { value: 'us', label: 'United States' },
              { value: 'ca', label: 'Canada' }
            ]
          }
        ]}
        actions={[]}
      />
    )

    const dropdown = screen.getByTestId(
      'integration-test-field-country-dropdown'
    )

    fireEvent.change(dropdown, { target: { value: 'us' } })
    await waitFor(() => {
      expect(dropdown).toHaveValue('us')
    })
  })

  it('should handle textarea input', async () => {
    renderWithI18nAndTurboForm(
      <TurboForm
        testId="integration-test"
        fields={[
          {
            name: 'message',
            label: 'Message',
            type: 'textarea'
          }
        ]}
        actions={[]}
      />
    )

    const textarea = screen.getByTestId(
      'integration-test-field-message-textarea'
    )

    fireEvent.change(textarea, { target: { value: 'Hello World' } })
    await waitFor(() => {
      expect(textarea).toHaveValue('Hello World')
    })
  })

  it('should handle file upload', async () => {
    renderWithI18nAndTurboForm(
      <TurboForm
        testId="integration-test"
        fields={[
          {
            name: 'documents',
            label: 'Documents',
            type: 'file'
          }
        ]}
        actions={[]}
      />
    )

    const file = new File(['content'], 'test.txt', { type: 'text/plain' })
    const fileInput = screen.getByLabelText('Upload files')

    Object.defineProperty(fileInput, 'files', { value: [file] })
    fireEvent.change(fileInput)

    expect(fileInput).toBeInTheDocument()
    expect((fileInput as HTMLInputElement).files).toHaveLength(1)
  })

  it('should handle form submission workflow', async () => {
    const submitAction = vi.fn()

    renderWithI18nAndTurboForm(
      <TurboForm
        testId="integration-test"
        fields={[
          { name: 'name', label: 'Name', type: 'text' },
          { name: 'email', label: 'Email', type: 'text' },
          { name: 'message', label: 'Message', type: 'textarea' }
        ]}
        actions={[
          { label: 'Submit', onClick: submitAction },
          { label: 'Reset', onClick: vi.fn() }
        ]}
      />
    )

    const nameInput = screen.getByTestId('integration-test-field-name-input')
    const emailInput = screen.getByTestId('integration-test-field-email-input')
    const messageTextarea = screen.getByTestId(
      'integration-test-field-message-textarea'
    )

    fireEvent.change(nameInput, { target: { value: 'John Doe' } })
    fireEvent.change(emailInput, { target: { value: 'john@example.com' } })
    fireEvent.change(messageTextarea, {
      target: { value: 'Hello from test' }
    })

    await waitFor(() => {
      expect(nameInput).toHaveValue('John Doe')
      expect(emailInput).toHaveValue('john@example.com')
      expect(messageTextarea).toHaveValue('Hello from test')
    })

    const submitButton = screen.getByTestId('integration-test-action-0')
    fireEvent.click(submitButton)

    expect(submitAction).toHaveBeenCalledTimes(1)
  })

  it('should handle form reset workflow', async () => {
    const resetAction = vi.fn()

    renderWithI18nAndTurboForm(
      <TurboForm
        testId="integration-test"
        fields={[
          { name: 'name', label: 'Name', type: 'text' },
          { name: 'email', label: 'Email', type: 'text' }
        ]}
        actions={[{ label: 'Reset', onClick: resetAction }]}
      />
    )

    const nameInput = screen.getByTestId('integration-test-field-name-input')
    const emailInput = screen.getByTestId('integration-test-field-email-input')

    fireEvent.change(nameInput, { target: { value: 'John Doe' } })
    fireEvent.change(emailInput, { target: { value: 'john@example.com' } })

    await waitFor(() => {
      expect(nameInput).toHaveValue('John Doe')
      expect(emailInput).toHaveValue('john@example.com')
    })

    const resetButton = screen.getByTestId('integration-test-action-0')
    fireEvent.click(resetButton)

    expect(resetAction).toHaveBeenCalledTimes(1)
  })

  it('should handle validation with schema - required field validation', async () => {
    renderWithI18nAndTurboForm(
      <TurboForm
        testId="integration-test"
        fields={[
          { name: 'name', label: 'Name', type: 'text' },
          { name: 'email', label: 'Email', type: 'text' }
        ]}
        actions={[]}
      />,
      {
        name: [{ type: 'required', message: 'Name is required' }],
        email: [
          { type: 'required', message: 'Email is required' },
          { type: 'email', message: 'Email must be valid' }
        ]
      }
    )

    const nameInput = screen.getByTestId('integration-test-field-name-input')
    const emailInput = screen.getByTestId('integration-test-field-email-input')

    fireEvent.focus(nameInput)
    fireEvent.blur(nameInput)

    await waitFor(() => {
      const nameError = screen.getByText('Name is required')
      expect(nameError).toBeInTheDocument()
    })

    fireEvent.change(emailInput, { target: { value: 'invalid-email' } })
    fireEvent.blur(emailInput)

    await waitFor(() => {
      const emailError = screen.getByText('Email must be valid')
      expect(emailError).toBeInTheDocument()
    })
  })

  it('should clear validation errors when valid values are entered', async () => {
    renderWithI18nAndTurboForm(
      <TurboForm
        testId="integration-test"
        fields={[{ name: 'name', label: 'Name', type: 'text' }]}
        actions={[]}
      />,
      {
        name: [{ type: 'required', message: 'Name is required' }]
      }
    )

    const nameInput = screen.getByTestId('integration-test-field-name-input')

    fireEvent.focus(nameInput)
    fireEvent.blur(nameInput)

    await waitFor(() => {
      const nameError = screen.getByText('Name is required')
      expect(nameError).toBeInTheDocument()
    })

    fireEvent.change(nameInput, { target: { value: 'John Doe' } })
    fireEvent.blur(nameInput)

    await waitFor(() => {
      const nameErrorGone = screen.queryByText('Name is required')
      expect(nameErrorGone).not.toBeInTheDocument()
    })
  })

  it('should validate multiple fields with different rules', async () => {
    renderWithI18nAndTurboForm(
      <TurboForm
        testId="integration-test"
        fields={[
          { name: 'name', label: 'Name', type: 'text' },
          { name: 'age', label: 'Age', type: 'text' },
          { name: 'email', label: 'Email', type: 'text' }
        ]}
        actions={[]}
      />,
      {
        name: [
          { type: 'required', message: 'Name is required' },
          {
            type: 'minLength',
            value: 2,
            message: 'Name must be at least 2 characters'
          }
        ],
        age: [
          { type: 'required', message: 'Age is required' },
          { type: 'minLength', value: 1, message: 'Age must be provided' }
        ],
        email: [
          { type: 'required', message: 'Email is required' },
          { type: 'email', message: 'Email must be valid' }
        ]
      }
    )

    const nameInput = screen.getByTestId('integration-test-field-name-input')
    const ageInput = screen.getByTestId('integration-test-field-age-input')
    const emailInput = screen.getByTestId('integration-test-field-email-input')

    fireEvent.change(nameInput, { target: { value: 'J' } })
    fireEvent.blur(nameInput)

    await waitFor(() => {
      const nameError = screen.getByText('Name must be at least 2 characters')
      expect(nameError).toBeInTheDocument()
    })

    fireEvent.change(ageInput, { target: { value: '' } })
    fireEvent.blur(ageInput)

    await waitFor(() => {
      const ageError = screen.getByText('Age is required')
      expect(ageError).toBeInTheDocument()
    })

    fireEvent.change(emailInput, { target: { value: 'invalid-email' } })
    fireEvent.blur(emailInput)

    await waitFor(() => {
      const emailError = screen.getByText('Email must be valid')
      expect(emailError).toBeInTheDocument()
    })
  })

  it('should handle form submission with multiple fields', async () => {
    const submitAction = vi.fn()

    renderWithI18nAndTurboForm(
      <TurboForm
        testId="integration-test"
        fields={[
          { name: 'name', label: 'Name', type: 'text' },
          { name: 'email', label: 'Email', type: 'text' }
        ]}
        actions={[{ label: 'Submit', onClick: submitAction }]}
      />
    )

    const nameInput = screen.getByTestId('integration-test-field-name-input')
    const emailInput = screen.getByTestId('integration-test-field-email-input')
    const submitButton = screen.getByTestId('integration-test-action-0')

    fireEvent.change(nameInput, { target: { value: 'John Doe' } })
    fireEvent.change(emailInput, { target: { value: 'john@example.com' } })

    await waitFor(() => {
      expect(nameInput).toHaveValue('John Doe')
      expect(emailInput).toHaveValue('john@example.com')
    })

    fireEvent.click(submitButton)
    expect(submitAction).toHaveBeenCalledTimes(1)
  })
})
