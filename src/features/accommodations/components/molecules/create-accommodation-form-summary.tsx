import { LabelTitle } from '../../../../components/atoms'
import { useTurboFormContext } from '../../../../components/organisms'
import { FileUploadList } from '../../../../components/organisms/file-upload/components'

export const CreateAccommodationFormSummary = () => {
  const { values } = useTurboFormContext()
  return (
    <div className="flex flex-col gap-4">
      <LabelTitle>Accommodation</LabelTitle>
      <div className="flex flex-row gap-2">
        <div className="font-bold">Name: </div>
        <div>{values.name as string}</div>
      </div>
      <div className="flex flex-row gap-2">
        <div className="font-bold">Address: </div>
        <div>{values.address as string}</div>
      </div>
      <div className="flex flex-row gap-2">
        <div className="font-bold">Description: </div>
        <div>{values.description as string}</div>
      </div>
      <div className="flex flex-row gap-2">
        <div className="font-bold">Type: </div>
        <div>{values.type as string}</div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="font-bold">Photos: </div>
        <FileUploadList files={values.photos as File[]} />
      </div>

      <LabelTitle>Owner</LabelTitle>
      <div className="flex flex-row gap-2">
        <div className="font-bold">Name: </div>
        <div>{values.ownerName as string}</div>
      </div>
      <div className="flex flex-row gap-2">
        <div className="font-bold">Email: </div>
        <div>{values.ownerEmail as string}</div>
      </div>
      <div className="flex flex-row gap-2">
        <div className="font-bold">Phone: </div>
        <div>{values.ownerPhone as string}</div>
      </div>
    </div>
  )
}
