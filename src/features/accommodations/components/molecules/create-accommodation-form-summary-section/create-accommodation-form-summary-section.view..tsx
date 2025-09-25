import { LabelTitle } from '@/components/atoms'

interface ICreateAccommodationFormSummarySectionProps {
  title: string
  children: React.ReactNode
}

export const CreateAccommodationFormSummarySection = ({
  title,
  children
}: ICreateAccommodationFormSummarySectionProps) => {
  return (
    <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
      <div className="mb-4 border-b border-gray-200 pb-2 text-lg font-bold text-gray-800">
        <LabelTitle>{title}</LabelTitle>
      </div>
      <div className="space-y-4">{children}</div>
    </div>
  )
}
