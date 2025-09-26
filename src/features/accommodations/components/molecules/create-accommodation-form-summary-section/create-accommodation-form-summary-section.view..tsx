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
    <div
      data-testid="create-accommodation-form-summary-section-test-id"
      className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm"
    >
      <div
        data-testid="create-accommodation-form-summary-section-title-container-test-id"
        className="mb-4 border-b border-gray-200 pb-2 text-lg font-bold text-gray-800"
      >
        <LabelTitle testId="create-accommodation-form-summary-section-title-test-id">
          {title}
        </LabelTitle>
      </div>
      <div
        data-testid="create-accommodation-form-summary-section-children-test-id"
        className="space-y-4"
      >
        {children}
      </div>
    </div>
  )
}
