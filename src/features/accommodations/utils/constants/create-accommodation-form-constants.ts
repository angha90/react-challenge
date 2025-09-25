import type { TFunction } from 'i18next'
import { ECreateAccommodationFormSteps } from '../enums'
import type { TypeTurboFormValues } from '@/components/organisms'

export const accommodationFormStepTitle = (t: TFunction) => ({
  [ECreateAccommodationFormSteps.ACCOMMODATION]: t(
    'accomodations.createForm.step.accommodation'
  ),
  [ECreateAccommodationFormSteps.OWNER]: t(
    'accomodations.createForm.step.owner'
  ),
  [ECreateAccommodationFormSteps.SUMMARY]: t(
    'accomodations.createForm.step.summary'
  )
})

export const createAccommodationFormSummaryAccommodationStepFields = (
  t: TFunction,
  values: TypeTurboFormValues
) => [
  {
    label: t('accomodations.createForm.field.name'),
    value: values.name as string
  },
  {
    label: t('accomodations.createForm.field.address'),
    value: values.address as string
  },
  {
    label: t('accomodations.createForm.field.description'),
    value: values.description as string
  },
  {
    label: t('accomodations.createForm.field.type'),
    value: values.type as string,
    specialValue: values.type
      ? t(
          `accomodations.createForm.accommodationTypes.${values.type as string}`
        )
      : undefined
  },
  {
    label: t('accomodations.createForm.field.photos'),
    value: values.photos as File[],
    isFileList: true
  }
]

export const createAccommodationFormSummaryOwnerStepFields = (
  t: TFunction,
  values: TypeTurboFormValues
) => [
  {
    label: t('accomodations.createForm.field.ownerName'),
    value: values.ownerName as string
  },
  {
    label: t('accomodations.createForm.field.ownerEmail'),
    value: values.ownerEmail as string
  },
  {
    label: t('accomodations.createForm.field.ownerPhone'),
    value: values.ownerPhone as string
  }
]
