export interface ITurboFormField {
  label: string
  type: "text" | "email" | "password" | "number" | "date" | "time" | "tel" | "url" | "search" | "color" | "file" | "range" | "textarea" | "select" | "radio" | "checkbox"
  className?: string,
}


export interface ITurboFormActions {
    label: string
    onClick: () => void
    className?: string
}

export interface ITurboFormProps {
  fields: ITurboFormField[]
  actions: ITurboFormActions[]
  className?: string
  fieldsClassName?: string
  actionsClassName?: string
}
