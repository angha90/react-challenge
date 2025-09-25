import { ECreateAccommodationFormSteps } from '../enums'
import type { ICreateAccommodationFormActionsProps } from '../interfaces'

export const createAccommodationFormActions = ({
  step,
  previousStep,
  nextStep,
  isNextButtonDisabled,
  onSubmit,
  t
}: ICreateAccommodationFormActionsProps) => [
  {
    label: t('accomodations.createForm.button.back'),
    onClick: () => previousStep(),
    className:
      'cursor-pointer rounded-full border border-2 border-gray-300 bg-white px-4 py-2 font-medium text-gray-500 hover:border-orange-500 hover:bg-orange-500 hover:text-white',
    hidden: step === ECreateAccommodationFormSteps.ACCOMMODATION
  },
  {
    label: t('accomodations.createForm.button.next'),
    onClick: () => nextStep(),
    className:
      'bg-orange-500 text-white px-4 py-2 border border-2 border-orange-500 rounded-4xl font-medium hover:cursor-pointer hover:bg-orange-600 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed',
    hidden: step === ECreateAccommodationFormSteps.SUMMARY,
    disabled: isNextButtonDisabled
  },
  {
    label: t('accomodations.createForm.button.submit'),
    onClick: () => onSubmit(),
    className:
      'bg-orange-500 text-white border border-2 border-orange-500 px-4 py-2 rounded-4xl font-medium hover:cursor-pointer hover:bg-orange-600 transition-colors duration-200',
    hidden: [
      ECreateAccommodationFormSteps.ACCOMMODATION,
      ECreateAccommodationFormSteps.OWNER
    ].includes(step)
  }
]
