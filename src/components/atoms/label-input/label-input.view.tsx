import type { ILabelInputProps } from "./interfaces"

export const LabelInput = ({ children }: ILabelInputProps) => {
  return (
      <label className="text-sm font-medium text-gray-500">
        {children}
      </label>
  )
}