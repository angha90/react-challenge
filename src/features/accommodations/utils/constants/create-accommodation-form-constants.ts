import type { TFunction } from 'i18next'
import { ECreateAccommodationFormSteps } from '../enums'

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
