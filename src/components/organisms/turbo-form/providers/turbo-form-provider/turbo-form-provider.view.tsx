import { useState } from 'react'
import { TurboFormContext } from '../../contexts'
import type {
  ITurboFormContext,
  ITurboFormProviderProps,
  TypeTurboFormValues,
  TypeTurboFormErrors
} from '../../interfaces'

export const TurboFormProvider = ({
  children,
  value
}: ITurboFormProviderProps) => {
  const [values, setValues] = useState<TypeTurboFormValues>(value?.values || {})
  const [errors, setErrors] = useState<TypeTurboFormErrors>(value?.errors || {})

  const contextValue: ITurboFormContext = {
    values,
    errors,
    schema: value?.schema,
    setValues,
    setErrors
  }

  return (
    <TurboFormContext.Provider value={contextValue}>
      {children}
    </TurboFormContext.Provider>
  )
}
