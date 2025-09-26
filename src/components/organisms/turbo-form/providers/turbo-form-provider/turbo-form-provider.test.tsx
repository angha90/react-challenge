import { screen, waitFor, fireEvent } from '@testing-library/react'
import { renderWithI18n } from '@/utils'
import { TurboFormProvider } from './turbo-form-provider.view'
import { useTurboFormContext } from '../../contexts'

const TurboFormConsumerTest = ({ testId }: { testId: string }) => {
  const {
    values,
    errors,
    setValues,
    setErrors,
    validate,
    isFormValid,
    resetForm
  } = useTurboFormContext()
  return (
    <div data-testid={testId}>
      <button
        data-testid={`${testId}-set-values`}
        onClick={() => setValues({ a: '1' })}
      />
      <button
        data-testid={`${testId}-set-errors`}
        onClick={() => setErrors({ a: ['e'] })}
      />
      <button
        data-testid={`${testId}-validate`}
        onClick={() => validate('a', values)}
      />
      <button
        data-testid={`${testId}-is-valid`}
        onClick={() => {
          const isValid = isFormValid(['a'])
          const resultElement = document.getElementById(
            `${testId}-is-valid-result`
          )
          if (resultElement) {
            resultElement.textContent = isValid.toString()
          }
        }}
      />
      <button data-testid={`${testId}-reset`} onClick={() => resetForm()} />
      <div data-testid={`${testId}-values`}>{JSON.stringify(values)}</div>
      <div data-testid={`${testId}-errors`}>{JSON.stringify(errors)}</div>
      <div
        id={`${testId}-is-valid-result`}
        data-testid={`${testId}-is-valid-result`}
      ></div>
    </div>
  )
}

describe('TurboFormProvider', () => {
  it('provides initial values and errors, and updates via setters', async () => {
    renderWithI18n(
      <TurboFormProvider
        value={{
          values: { a: '' },
          errors: {},
          setValues: () => {},
          setErrors: () => {},
          validate: () => {},
          isFormValid: () => true,
          resetForm: () => {}
        }}
      >
        <TurboFormConsumerTest testId="provider-test" />
      </TurboFormProvider>
    )

    const values = screen.getByTestId('provider-test-values')
    expect(values).toHaveTextContent('{"a":""}')

    const setValues = screen.getByTestId('provider-test-set-values')
    fireEvent.click(setValues)

    await waitFor(() => {
      expect(values).toHaveTextContent('{"a":"1"}')
    })

    const setErrors = screen.getByTestId('provider-test-set-errors')

    fireEvent.click(setErrors)

    await waitFor(() => {
      const errors = screen.getByTestId('provider-test-errors')
      expect(errors).toHaveTextContent('{"a":["e"]}')
    })
  })

  it('validate updates errors and reset clears state', async () => {
    renderWithI18n(
      <TurboFormProvider
        schema={{ a: [{ type: 'required', message: 'required' }] }}
        value={{
          values: { a: '' },
          errors: {},
          setValues: () => {},
          setErrors: () => {},
          validate: () => {},
          isFormValid: () => true,
          resetForm: () => {}
        }}
      >
        <TurboFormConsumerTest testId="provider-test" />
      </TurboFormProvider>
    )

    const validate = screen.getByTestId('provider-test-validate')
    fireEvent.click(validate)
    await waitFor(() => {
      const errors = screen.getByTestId('provider-test-errors')
      expect(errors).toHaveTextContent('required')
    })

    const reset = screen.getByTestId('provider-test-reset')

    fireEvent.click(reset)

    await waitFor(() => {
      const values = screen.getByTestId('provider-test-values')
      const errors = screen.getByTestId('provider-test-errors')
      expect(values).toHaveTextContent('{}')
      expect(errors).toHaveTextContent('{}')
    })
  })

  it('isFormValid returns true/false depending on schema validation', async () => {
    renderWithI18n(
      <TurboFormProvider
        schema={{ a: [{ type: 'required', message: 'required' }] }}
      >
        <TurboFormConsumerTest testId="provider-test" />
      </TurboFormProvider>
    )

    const setValuesButton = screen.getByTestId('provider-test-set-values')
    fireEvent.click(setValuesButton)

    const isValidButton = screen.getByTestId('provider-test-is-valid')
    fireEvent.click(isValidButton)

    await waitFor(() => {
      const isValidResult = screen.getByTestId('provider-test-is-valid-result')
      expect(isValidResult).toHaveTextContent('true')
    })

    const resetButton = screen.getByTestId('provider-test-reset')
    fireEvent.click(resetButton)

    await waitFor(() => {
      const values = screen.getByTestId('provider-test-values')
      expect(values).toHaveTextContent('{}')
    })

    fireEvent.click(isValidButton)

    await waitFor(() => {
      const isValidResult = screen.getByTestId('provider-test-is-valid-result')
      expect(isValidResult).toHaveTextContent('false')
    })
  })
})
