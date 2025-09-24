import { Card } from '../../../../../components/atoms'
import { TurboFormProvider } from '../../../../../components/organisms/turbo-form/providers'
import { CreateAccommodationForm } from '../../organisms'

export const CreateAccommodation = () => {
  return (
    <div className="flex h-full w-full items-center justify-center p-10">
      <Card className="h-full w-full max-w-lg lg:w-1/2">
        <TurboFormProvider>
          <CreateAccommodationForm />
        </TurboFormProvider>
      </Card>
    </div>
  )
}
