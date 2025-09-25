import { CreateAccommodationFormSummaryField } from '../create-accommodation-form-summary-field'
import { CreateAccommodationFormSummarySection } from '../create-accommodation-form-summary-section'
import { useCreateAccommodationFormSummary } from './create-accommodation-form-summary.hook'

export const CreateAccommodationFormSummary = () => {
  const { accommodationFields, ownerFields, t } =
    useCreateAccommodationFormSummary()

  return (
    <div className="space-y-6">
      <CreateAccommodationFormSummarySection
        title={t('accomodations.createForm.step.accommodation')}
      >
        {accommodationFields.map((field, index) => (
          <CreateAccommodationFormSummaryField
            key={index}
            label={field.label}
            value={field.value}
            isFileList={field.isFileList}
            specialValue={field.specialValue}
          />
        ))}
      </CreateAccommodationFormSummarySection>

      <CreateAccommodationFormSummarySection
        title={t('accomodations.createForm.step.owner')}
      >
        {ownerFields.map((field, index) => (
          <CreateAccommodationFormSummaryField
            key={index}
            label={field.label}
            value={field.value}
          />
        ))}
      </CreateAccommodationFormSummarySection>
    </div>
  )
}
