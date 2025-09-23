import { LabelTitle } from "../../../../../components/atoms"
import { TurboForm } from "../../../../../components/organisms"

export const CreateAccommodationForm = () => {
    const fields = [
        {
            label: "Name",
            type: "text" as const,
            className: "w-full",
        },
        {
            label: "Address",
            type: "text" as const,
            className: "w-full",
        },
        {
            label: "Description",
            type: "text" as const,
            className: "w-full",
        },
        {
            label: "Type",
            type: "text" as const,
            className: "w-full",
        },
        {
            label: "Photos",
            type: "text" as const,
            className: "w-full",
        },
        {
            label: "Owner",
            type: "text" as const,
        },
        {
            label: "Owner Email",
            type: "text" as const,
            className: "w-full",
        },
        {
            label: "Owner Phone",
            type: "text" as const,
            className: "w-full",
        },
    ]

    const actions = [
        {
            label: "Next",
            onClick: () => {},
            className: "bg-orange-500 text-white px-4 py-2 rounded-4xl hover:cursor-pointer hover:bg-orange-600 transition-colors duration-200",
        },
    ]
  return (
    <div className="w-full flex flex-col gap-5 h-full p-5">
        <div className="w-full flex justify-center items-center gap-2">
            <LabelTitle>Accommodation</LabelTitle>
        </div>
        <TurboForm className="w-full flex flex-col gap-2 h-full" fields={fields} actions={actions} fieldsClassName="flex-1" actionsClassName="flex justify-center items-center gap-2" />
    </div>
  )
}