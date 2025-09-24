import type { ReactNode } from 'react'

export interface ITurboFormField {
  label?: string
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
