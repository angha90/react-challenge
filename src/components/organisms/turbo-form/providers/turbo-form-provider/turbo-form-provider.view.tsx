import { useState } from 'react'
import { TurboFormContext } from '../../contexts'
import type {
  ITurboFormContext,
  ITurboFormProviderProps,
  TypeTurboFormValues,
  TypeTurboFormErrors
} from '../../interfaces'

const validators: Record<
  string,
  (value: any, ruleValue?: boolean | number) => boolean
> = {
  required: (value) => value != null && value !== '',

  minLength: (value, ruleValue) => {
    if (value == null || value === '') return true
    return (
      typeof value === 'string' &&
      typeof ruleValue === 'number' &&
      value.length >= ruleValue
    )
  },

  maxLength: (value, ruleValue) => {
    if (value == null || value === '') return true
    return (
      (typeof value === 'string' &&
        typeof ruleValue === 'number' &&
        value.length <= ruleValue) ||
      (Array.isArray(value) &&
        typeof ruleValue === 'number' &&
        value.length <= ruleValue)
    )
  },
  numberIsNotAllowed: (value) =>
    typeof value === 'string' ? !/\d/.test(value) : true,

  email: (value) =>
    typeof value === 'string'
      ? value === '' || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
      : true,

  phone: (value: string) =>
    typeof value === 'string'
      ? value === '' || /^[0-9]{1,9}$/.test(value)
      : true
}

export const TurboFormProvider = ({
  children,
  value,
  schema
}: ITurboFormProviderProps) => {
  const [values, setValues] = useState<TypeTurboFormValues>(value?.values || {})
  const [errors, setErrors] = useState<TypeTurboFormErrors>(value?.errors || {})

  const validate = (key: string) => {
    const fieldValue = values[key]
    const fieldSchema = schema?.[key] || []
    let firstError: string | null = null

    for (const rule of fieldSchema) {
      const validator = validators[rule.type]
      if (validator && !validator(fieldValue, rule.value)) {
        firstError = rule.message
        break
      }
    }

    setErrors((prev) => ({ ...prev, [key]: firstError ? [firstError] : [] }))
    return firstError ? [firstError] : []
  }

  const contextValue: ITurboFormContext = {
    values,
    errors,
    setValues,
    setErrors,
    validate
  }

  return (
    <TurboFormContext.Provider value={contextValue}>
      {children}
    </TurboFormContext.Provider>
  )
}
