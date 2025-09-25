import { Card } from '../../../../../components/atoms'
import { TurboFormProvider } from '../../../../../components/organisms/turbo-form/providers'
import { createAccommodationFormSchema } from '../../../utils/helpers'
import { CreateAccommodationForm } from '../../organisms'

export const CreateAccommodation = () => {
  return (
    <div className="flex h-full w-full items-center justify-center p-10">
      <Card className="h-full w-full lg:max-w-3xl">
        <TurboFormProvider schema={createAccommodationFormSchema}>
          <CreateAccommodationForm />
        </TurboFormProvider>
      </Card>
    </div>
  )
}
