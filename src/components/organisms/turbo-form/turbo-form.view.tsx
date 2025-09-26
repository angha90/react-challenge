import { Button } from '../../atoms'
import {
  TurboFormInputText,
  TurboFormDropdown,
  TurboFormTextArea,
  TurboFormFileUpload
} from './components'
import type { ITurboFormProps } from './interfaces'

export const TurboForm = ({
  testId,
  fields,
  actions,
  className,
  fieldsClassName,
  actionsClassName
}: ITurboFormProps) => {
  return (
    <div data-testid={testId} className={className}>
      <div data-testid={`${testId}-fields`} className={fieldsClassName}>
        {fields.map((field) => {
          if (field.hidden) return null
          if (field.template)
            return <div key={field.name}>{field.template}</div>

          switch (field.type) {
            case 'text':
              return (
                <TurboFormInputText
                  testId={`${testId}-field-${field.name}`}
                  name={field.name}
                  key={field.label}
                  label={field.label}
                  className={field.className}
                />
              )
            case 'textarea':
              return (
                <TurboFormTextArea
                  testId={`${testId}-field-${field.name}`}
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
                  testId={`${testId}-field-${field.name}`}
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
                  testId={`${testId}-field-${field.name}`}
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
      <div data-testid={`${testId}-actions`} className={actionsClassName}>
        {actions.map((action, index) =>
          action.hidden ? null : (
            <Button
              testId={`${testId}-action-${index}`}
              key={action.label}
              onClick={action.onClick}
              className={action.className}
              disabled={action.disabled}
            >
              {action.label}
            </Button>
          )
        )}
      </div>
    </div>
  )
}
