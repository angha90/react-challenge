import { CreateAccommodationFormSummary } from '../../components/molecules'
import { ECreateAccommodationFormSteps } from '../enums'
import type { ICreateAccommodationFormFieldsProps } from '../interfaces'

export const createAccommodationFormFields = ({
  step
}: ICreateAccommodationFormFieldsProps) => [
  {
    name: 'name',
    label: 'Name',
    type: 'text' as const,
    className: 'w-full mb-2',
    hidden: step !== ECreateAccommodationFormSteps.ACCOMMODATION
  },
  {
    name: 'address',
    label: 'Address',
    type: 'text' as const,
    className: 'w-full mb-2',
    hidden: step !== ECreateAccommodationFormSteps.ACCOMMODATION
  },
  {
    name: 'description',
    label: 'Description',
    type: 'textarea' as const,
    className: 'w-full mb-2',
    hidden: step !== ECreateAccommodationFormSteps.ACCOMMODATION
  },
  {
    name: 'type',
    label: 'Type',
    type: 'dropdown' as const,
    options: [
      { value: 'apartment', label: 'Apartment' },
      { value: 'villa', label: 'Villa' },
      { value: 'house', label: 'House' }
    ],
    placeholder: 'Select a type',
    className: 'w-full mb-2',
    hidden: step !== ECreateAccommodationFormSteps.ACCOMMODATION
  },
  {
    name: 'photos',
    label: 'Photos',
    type: 'file' as const,
    className: 'w-full mb-2',
    hidden: step !== ECreateAccommodationFormSteps.ACCOMMODATION
  },
  {
    name: 'ownerName',
    label: 'Owner Name',
    type: 'text' as const,
    className: 'w-full mb-2',
    hidden: step !== ECreateAccommodationFormSteps.OWNER
  },
  {
    name: 'ownerEmail',
    label: 'Owner Email',
    type: 'text' as const,
    className: 'w-full mb-2',
    hidden: step !== ECreateAccommodationFormSteps.OWNER
  },
  {
    name: 'ownerPhone',
    label: 'Owner Phone',
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
