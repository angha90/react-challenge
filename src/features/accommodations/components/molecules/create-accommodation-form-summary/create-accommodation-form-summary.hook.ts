import { useTranslation } from 'react-i18next'
import { useTurboFormContext } from '@/components/organisms'
import {
  createAccommodationFormSummaryAccommodationStepFields,
  createAccommodationFormSummaryOwnerStepFields
} from '@/features/accommodations/utils'

export const useCreateAccommodationFormSummary = () => {
  const { t } = useTranslation()
  const { values } = useTurboFormContext()

  const accommodationFields =
    createAccommodationFormSummaryAccommodationStepFields(t, values)
  const ownerFields = createAccommodationFormSummaryOwnerStepFields(t, values)

  return {
    accommodationFields,
    ownerFields,
    t
  }
}
