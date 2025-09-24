import { Button } from "../../atoms"
import { TurboFormInputText,  TurboFormDropdown, TurboFormTextArea } from "../../molecules"
import type { ITurboFormProps } from "./interfaces"

export const TurboForm = ({ fields, actions, className, fieldsClassName, actionsClassName }: ITurboFormProps) => {
  return (
    <div className={className}>
      <div className={fieldsClassName}>
      {fields.map((field) => {
        if (field.hidden) return null
        if (field.template) return field.template

        switch (field.type) {
          case "text":
            return <TurboFormInputText key={field.label} label={field.label} className={field.className} />
          case "textarea":
            return <TurboFormTextArea key={field.label} label={field.label} className={field.className} rows={field.rows} />
          case "dropdown":
            return <TurboFormDropdown key={field.label} label={field.label} className={field.className} options={field.options} placeholder={field.placeholder} />
          default:
            return null
        }
      })}
      </div>
      <div className={actionsClassName}>
        {actions.map((action) => 
          action.hidden ? null : <Button key={action.label} onClick={action.onClick} className={action.className}>{action.label}</Button>
        )}
      </div>
    </div>
  )
}