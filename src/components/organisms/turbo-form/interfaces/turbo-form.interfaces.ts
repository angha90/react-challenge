import type { ReactNode } from 'react'

export interface ITurboFormField {
  label?: string
  name: string
  type?:
    | 'text'
    | 'email'
    | 'password'
    | 'number'
    | 'date'
    | 'time'
    | 'tel'
    | 'url'
    | 'search'
    | 'color'
    | 'file'
    | 'range'
    | 'textarea'
    | 'select'
    | 'radio'
    | 'checkbox'
    | 'dropdown'
  className?: string
  rows?: number
  options?: { value: string; label: string }[]
  placeholder?: string
  template?: ReactNode
  hidden?: boolean
}

export interface ITurboFormActions {
  label: string
  onClick: () => void
  className?: string
  hidden?: boolean
  disabled?: boolean
}

export interface ITurboFormProps {
  fields: ITurboFormField[]
  actions: ITurboFormActions[]
  className?: string
  fieldsClassName?: string
  actionsClassName?: string
}

type TypeTurboFormValue = string | number | boolean | File[]

export type TypeTurboFormValues = Record<string, TypeTurboFormValue>

interface ITurboFormError {
  required?: boolean
  minLength?: boolean
  maxLength?: boolean
  numberIsNotAllowed?: boolean
}

export type TypeTurboFormErrors = Record<string, ITurboFormError>

export interface TypeTurboFormSchemaValue {
  message: string
  value: boolean | number
}

export type TypeTurboFormErrorKey =
  | 'required'
  | 'minLength'
  | 'maxLength'
  | 'numberIsNotAllowed'

export interface ITurboFormProps {
  schema?: Record<TypeTurboFormErrorKey, TypeTurboFormSchemaValue>
}

export interface ITurboFormContext {
  values: TypeTurboFormValues
  errors: TypeTurboFormErrors
  schema?: Record<TypeTurboFormErrorKey, TypeTurboFormSchemaValue>
  setValues: (values: TypeTurboFormValues) => void
  setErrors: (errors: TypeTurboFormErrors) => void
}

export interface ITurboFormProviderProps {
  children: ReactNode
  value?: ITurboFormContext
}
