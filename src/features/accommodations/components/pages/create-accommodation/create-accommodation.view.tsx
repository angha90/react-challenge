import { Card } from "../../../../../components/atoms"
import { CreateAccommodationForm } from "../../organisms"

export const CreateAccommodation = () => {
  return (
    <div className="w-full h-full flex justify-center items-center p-10 ">
        <Card className="w-full lg:w-1/2 max-w-lg h-full">
          <CreateAccommodationForm />
        </Card>
    </div>
  )
}
