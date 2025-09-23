import { Button } from "../../atoms"
import { TurboFormInputText } from "../../molecules/turbo-form-input-text/turbo-form-input-text.view"
import type { ITurboFormProps } from "./interfaces"

export const TurboForm = ({ fields, actions, className, fieldsClassName, actionsClassName }: ITurboFormProps) => {
  return (
    <div className={className}>
      <div className={fieldsClassName}>
      {fields.map((field) => (
        <TurboFormInputText key={field.label} label={field.label} className={field.className} />
      ))}
      </div>
      <div className={actionsClassName}>
        {actions.map((action) => (
          <Button key={action.label} onClick={action.onClick} className={action.className}>{action.label}</Button>
        ))}
      </div>
    </div>
  )
}