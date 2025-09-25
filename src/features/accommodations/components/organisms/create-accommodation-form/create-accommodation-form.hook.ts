import { useCallback, useMemo, useState } from 'react'
import { useTurboFormContext } from '../../../../../components/organisms'
import {
  createAccommodationFormActions,
  createAccommodationFormFields,
  ECreateAccommodationFormSteps
} from '../../../utils'

export const useCreateAccommodationForm = () => {
  const { values, isFormValid } = useTurboFormContext()
  const [step, setStep] = useState<ECreateAccommodationFormSteps>(
    ECreateAccommodationFormSteps.ACCOMMODATION
  )

  const nextStep = useCallback(() => setStep(step + 1), [step])

  const previousStep = useCallback(() => setStep(step - 1), [step])

  const onSubmit = useCallback(() => {
    console.log('submit values', values)
  }, [values])

  const fields = useMemo(() => createAccommodationFormFields({ step }), [step])

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
        onSubmit
      }),
    [step, currentStepFields, previousStep, nextStep, isFormValid, onSubmit]
  )

  return {
    step,
    fields,
    actions
  }
}
