import { useState } from 'react'
import { TurboFormContext } from '../../contexts'
import type {
  ITurboFormContext,
  ITurboFormProviderProps,
  TypeTurboFormValues,
  TypeTurboFormErrors
} from '../../interfaces'
import { errorGetter } from '../../utils'

export const TurboFormProvider = ({
  children,
  value,
  schema
}: ITurboFormProviderProps) => {
  const [values, setValues] = useState<TypeTurboFormValues>(value?.values || {})
  const [errors, setErrors] = useState<TypeTurboFormErrors>(value?.errors || {})

  const validate = (key: string, valuesArg: TypeTurboFormValues) => {
    const newErrors = errorGetter(key, valuesArg, schema || {})

    setErrors((prev) => ({ ...prev, [key]: newErrors }))
  }
  const isFormValid = (fields: string[]) => {
    return fields.every(
      (field) => errorGetter(field, values, schema || {}).length === 0
    )
  }

  const contextValue: ITurboFormContext = {
    values,
    errors,
    setValues,
    setErrors,
    validate,
    isFormValid
  }

  return (
    <TurboFormContext.Provider value={contextValue}>
      {children}
    </TurboFormContext.Provider>
  )
}
