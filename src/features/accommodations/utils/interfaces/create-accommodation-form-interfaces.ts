import type { ECreateAccommodationFormSteps } from '../enums'

export interface ICreateAccommodationFormFieldsProps {
  step: ECreateAccommodationFormSteps
}

export interface ICreateAccommodationFormActionsProps {
  step: ECreateAccommodationFormSteps
  previousStep: () => void
  nextStep: () => void
  isNextButtonDisabled: boolean
  onSubmit: () => void
}
