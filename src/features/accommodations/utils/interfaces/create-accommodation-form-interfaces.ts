import type { TFunction } from 'i18next'
import type { ECreateAccommodationFormSteps } from '../enums'

export interface ICreateAccommodationFormFieldsProps {
  step: ECreateAccommodationFormSteps
  t: TFunction
}

export interface ICreateAccommodationFormActionsProps {
  step: ECreateAccommodationFormSteps
  previousStep: () => void
  nextStep: () => void
  isNextButtonDisabled: boolean
  onSubmit: () => void
  t: TFunction
}
