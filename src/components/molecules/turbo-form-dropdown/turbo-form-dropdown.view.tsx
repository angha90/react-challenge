import { LabelInput, Dropdown } from "../../atoms"
import type { ITurboFormDropdownProps } from "./interfaces"

export const TurboFormDropdown = ({ label, className, options = [], placeholder }: ITurboFormDropdownProps) => {
  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      {label && <LabelInput>{label}</LabelInput>}
      <Dropdown options={options} placeholder={placeholder} />
    </div>
  )
}
