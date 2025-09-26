import { LabelTitle } from '@/components/atoms'
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
      {
        value: 'department',
        label: t('accomodations.createForm.accommodationTypes.department')
      },
      {
        value: 'villa',
        label: t('accomodations.createForm.accommodationTypes.villa')
      },
      {
        value: 'house',
        label: t('accomodations.createForm.accommodationTypes.house')
      }
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
      <div
        key={`create-accommodation-form-summary-${step}`}
        className="space-y-6"
      >
        <div className="text-center text-lg font-semibold text-gray-700">
          {t('accomodations.createForm.step.summary')}
        </div>
        <div className="text-center text-sm text-gray-500">
          {t('accomodations.createForm.summary.placeholder')}
        </div>
      </div>
    ),
    hidden: step !== ECreateAccommodationFormSteps.SUMMARY
  }
]
