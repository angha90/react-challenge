import { Button } from '../../atoms'
import {
  TurboFormInputText,
  TurboFormDropdown,
  TurboFormTextArea,
  TurboFormFileUpload
} from '../../molecules'
import type { ITurboFormProps } from './interfaces'

export const TurboForm = ({
  fields,
  actions,
  className,
  fieldsClassName,
  actionsClassName
}: ITurboFormProps) => {
  return (
    <div className={className}>
      <div className={fieldsClassName}>
        {fields.map((field) => {
          if (field.hidden) return null
          if (field.template) return field.template

          switch (field.type) {
            case 'text':
              return (
                <TurboFormInputText
                  name={field.name}
                  key={field.label}
                  label={field.label}
                  className={field.className}
                />
              )
            case 'textarea':
              return (
                <TurboFormTextArea
                  name={field.name}
                  key={field.label}
                  label={field.label}
                  className={field.className}
                  rows={field.rows}
                />
              )
            case 'dropdown':
              return (
                <TurboFormDropdown
                  name={field.name}
                  key={field.label}
                  label={field.label}
                  className={field.className}
                  options={field.options}
                  placeholder={field.placeholder}
                />
              )
            case 'file':
              return (
                <TurboFormFileUpload
                  name={field.name}
                  key={field.label}
                  label={field.label}
                  className={field.className}
                />
              )
            default:
              return null
          }
        })}
      </div>
      <div className={actionsClassName}>
        {actions.map((action) =>
          action.hidden ? null : (
            <Button
              key={action.label}
              onClick={action.onClick}
              className={action.className}
            >
              {action.label}
            </Button>
          )
        )}
      </div>
    </div>
  )
}
