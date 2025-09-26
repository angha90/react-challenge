import { Card } from '@/components/atoms'
import { TurboFormProvider } from '@/components/organisms/turbo-form/providers'
import { createAccommodationFormSchema } from '@/features/accommodations/utils/helpers'
import { CreateAccommodationForm } from '../../organisms'

export const CreateAccommodation = () => {
  return (
    <div
      data-testid="create-accommodation-test-id"
      className="flex w-full flex-1 items-center justify-center p-10"
    >
      <Card className="flex h-full w-full flex-col lg:max-w-3xl">
        <TurboFormProvider schema={createAccommodationFormSchema}>
          <CreateAccommodationForm />
        </TurboFormProvider>
      </Card>
    </div>
  )
}
