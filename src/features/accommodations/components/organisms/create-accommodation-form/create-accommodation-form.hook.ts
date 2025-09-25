import { useCallback, useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useTurboFormContext } from '@/components/organisms'
import {
  createAccommodationFormActions,
  createAccommodationFormFields,
  ECreateAccommodationFormSteps
} from '@/features/accommodations/utils'

export const useCreateAccommodationForm = () => {
  const { t } = useTranslation()
  const { values, isFormValid, resetForm } = useTurboFormContext()
  const [step, setStep] = useState<ECreateAccommodationFormSteps>(
    ECreateAccommodationFormSteps.ACCOMMODATION
  )

  const nextStep = useCallback(() => setStep(step + 1), [step])

  const previousStep = useCallback(() => setStep(step - 1), [step])

  const handleSubmitSuccess = useCallback(() => {
    console.log('Submit payload', values)
    resetForm()
    setStep(ECreateAccommodationFormSteps.ACCOMMODATION)
    alert(t('accomodations.createForm.messages.submitSuccess'))
  }, [values, t, resetForm])

  const onSubmit = useCallback(() => {
    const event = new CustomEvent('custom-react-submit', {
      detail: { values }
    })

    const host = document.querySelector('custom-react-form')

    ;(host ?? document).dispatchEvent(event)

    handleSubmitSuccess()
  }, [values, handleSubmitSuccess])

  const fields = useMemo(
    () => createAccommodationFormFields({ step, t }),
    [step, t]
  )

  const currentStepFields = useMemo(
    () => fields.filter((field) => !field.hidden).map((field) => field.name),
    [fields]
  )

  const actions = useMemo(
    () =>
      createAccommodationFormActions({
        step,
        previousStep,
        nextStep,
        isNextButtonDisabled: !isFormValid(currentStepFields),
        onSubmit,
        t
      }),
    [step, currentStepFields, previousStep, nextStep, isFormValid, onSubmit, t]
  )

  return {
    fields,
    actions
  }
}
