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

export type TypeTurboFormErrors = Record<string, string[]>

export type TypeTurboFormErrorKey =
  | 'required'
  | 'minLength'
  | 'maxLength'
  | 'numberIsNotAllowed'
  | 'phone'
  | 'email'

export interface TypeTurboFormSchemaValue {
  type: TypeTurboFormErrorKey
  message: string
  value?: boolean | number
}

export interface ITurboFormContext {
  values: TypeTurboFormValues
  errors: TypeTurboFormErrors
  schema?: Record<string, TypeTurboFormSchemaValue[]>
  setValues: (values: TypeTurboFormValues) => void
  setErrors: (errors: TypeTurboFormErrors) => void
  validate: (key: string) => void
  isFormValid: (fields: string[]) => boolean
}

export interface ITurboFormProviderProps {
  children: ReactNode
  value?: ITurboFormContext
  schema?: Record<string, TypeTurboFormSchemaValue[]>
}
