import { LabelTitle } from '@/components/atoms'
import { CreateAccommodationFormSummary } from '../../components/molecules'
import { accommodationFormStepTitle } from '../constants'
import { ECreateAccommodationFormSteps } from '../enums'
import type { ICreateAccommodationFormFieldsProps } from '../interfaces'

export const createAccommodationFormFields = ({
  step,
  t
}: ICreateAccommodationFormFieldsProps) => [
  {
    name: 'title',
    template: (
      <div
        key={`create-accommodation-form-title-${step}`}
        className="mb-5 flex w-full items-center justify-center"
      >
        <LabelTitle>{accommodationFormStepTitle(t)[step]}</LabelTitle>
      </div>
    ),
    hidden: step === ECreateAccommodationFormSteps.SUMMARY
  },
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
    template: (
      <CreateAccommodationFormSummary
        key={`create-accommodation-form-summary-${step}`}
      />
    ),
    hidden: step !== ECreateAccommodationFormSteps.SUMMARY
  }
]
