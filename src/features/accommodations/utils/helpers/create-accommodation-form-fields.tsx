import { CreateAccommodationFormSummary } from '../../components/molecules'
import { ECreateAccommodationFormSteps } from '../enums'
import type { ICreateAccommodationFormFieldsProps } from '../interfaces'

export const createAccommodationFormFields = ({
  step,
  t
}: ICreateAccommodationFormFieldsProps) => [
  {
    name: 'name',
    label: t('accomodations.createForm.field.name'),
    type: 'text' as const,
    className: 'w-full mb-2',
    hidden: step !== ECreateAccommodationFormSteps.ACCOMMODATION
  },
  {
    name: 'address',
    label: t('accomodations.createForm.field.address'),
    type: 'text' as const,
    className: 'w-full mb-2',
    hidden: step !== ECreateAccommodationFormSteps.ACCOMMODATION
  },
  {
    name: 'description',
    label: t('accomodations.createForm.field.description'),
    type: 'textarea' as const,
    className: 'w-full mb-2',
    hidden: step !== ECreateAccommodationFormSteps.ACCOMMODATION
  },
  {
    name: 'type',
    label: t('accomodations.createForm.field.type'),
    type: 'dropdown' as const,
    options: [
      { value: 'apartment', label: 'Apartment' },
      { value: 'villa', label: 'Villa' },
      { value: 'house', label: 'House' }
    ],
    className: 'w-full mb-2',
    hidden: step !== ECreateAccommodationFormSteps.ACCOMMODATION
  },
  {
    name: 'photos',
    label: t('accomodations.createForm.field.photos'),
    type: 'file' as const,
    className: 'w-full mb-2',
    hidden: step !== ECreateAccommodationFormSteps.ACCOMMODATION
  },
  {
    name: 'ownerName',
    label: t('accomodations.createForm.field.ownerName'),
    type: 'text' as const,
    className: 'w-full mb-2',
    hidden: step !== ECreateAccommodationFormSteps.OWNER
  },
  {
    name: 'ownerEmail',
    label: t('accomodations.createForm.field.ownerEmail'),
    type: 'text' as const,
    className: 'w-full mb-2',
    hidden: step !== ECreateAccommodationFormSteps.OWNER
  },
  {
    name: 'ownerPhone',
    label: t('accomodations.createForm.field.ownerPhone'),
    type: 'text' as const,
    className: 'w-full mb-2',
    hidden: step !== ECreateAccommodationFormSteps.OWNER
  },
  {
    name: 'summary',
    template: <CreateAccommodationFormSummary />,
    hidden: step !== ECreateAccommodationFormSteps.SUMMARY
  }
]
