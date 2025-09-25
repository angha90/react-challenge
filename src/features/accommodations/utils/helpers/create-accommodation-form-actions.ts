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
      'text-orange-500 px-4 py-2 rounded-4xl hover:cursor-pointer hover:bg-gray-100 transition-colors duration-200 ',
    hidden: step === ECreateAccommodationFormSteps.ACCOMMODATION
  },
  {
    label: t('accomodations.createForm.button.next'),
    onClick: () => nextStep(),
    className:
      'bg-orange-500 text-white px-4 py-2 rounded-4xl hover:cursor-pointer hover:bg-orange-600 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed',
    hidden: step === ECreateAccommodationFormSteps.SUMMARY,
    disabled: isNextButtonDisabled
  },
  {
    label: t('accomodations.createForm.button.submit'),
    onClick: () => onSubmit(),
    className:
      'bg-orange-500 text-white px-4 py-2 rounded-4xl hover:cursor-pointer hover:bg-orange-600 transition-colors duration-200',
    hidden: [
      ECreateAccommodationFormSteps.ACCOMMODATION,
      ECreateAccommodationFormSteps.OWNER
    ].includes(step)
  }
]
