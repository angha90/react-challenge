import { TurboForm } from '@/components/organisms'

import { useCreateAccommodationForm } from './create-accommodation-form.hook'

export const CreateAccommodationForm = () => {
  const { fields, actions } = useCreateAccommodationForm()

  return (
    <div
      data-testid="create-accommodation-form-container-test-id"
      className="flex h-full w-full flex-col gap-5 p-5"
    >
      <TurboForm
        testId="create-accommodation-form-test-id"
        fields={fields}
        actions={actions}
        className="flex h-full w-full flex-col gap-2"
        fieldsClassName="flex-1"
        actionsClassName="flex gap-2 justify-end items-center gap-2"
      />
    </div>
  )
}
