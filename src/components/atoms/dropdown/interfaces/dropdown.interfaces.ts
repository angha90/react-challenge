export interface IDropdownProps {
  options?: { value: string; label: string }[]
  placeholder?: string
  value?: string
  onChange?: (value: string) => void
  onBlur?: () => void
  testId?: string
  invalid?: boolean
}
