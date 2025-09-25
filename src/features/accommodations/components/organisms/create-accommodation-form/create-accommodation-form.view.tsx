import { LabelTitle } from '../../../../../components/atoms'
import { TurboForm } from '../../../../../components/organisms'
import {
  accommodationFormStepTitle,
  ECreateAccommodationFormSteps
} from '../../../utils'
import { useCreateAccommodationForm } from './create-accommodation-form.hook'

export const CreateAccommodationForm = () => {
  const { step, fields, actions } = useCreateAccommodationForm()

  return (
    <div className="flex h-full w-full flex-col gap-5 p-5">
      {step !== ECreateAccommodationFormSteps.SUMMARY && (
        <div className="flex w-full items-center justify-center">
          <LabelTitle>{accommodationFormStepTitle[step]}</LabelTitle>
        </div>
      )}
      <TurboForm
        fields={fields}
        actions={actions}
        className="flex h-full w-full flex-col gap-2"
        fieldsClassName="flex-1 overflow-y-auto"
        actionsClassName="flex gap-2 justify-end items-center gap-2"
      />
    </div>
  )
}
