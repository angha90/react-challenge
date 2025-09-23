import type { ILabelInputProps } from "./interfaces"

export const LabelInput = ({ children }: ILabelInputProps) => {
  return (
      <label className="text-sm font-medium">
        {children}
      </label>
  )
}