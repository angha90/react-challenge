import { useState } from 'react'
import { LabelTitle } from '../../../../../components/atoms'
import { TurboForm } from '../../../../../components/organisms'

enum ECreateAccommodationFormSteps {
  ACCOMMODATION = 1,
  OWNER = 2,
  SUMMARY = 3
}

export const CreateAccommodationForm = () => {
  const [step, setStep] = useState<ECreateAccommodationFormSteps>(
    ECreateAccommodationFormSteps.ACCOMMODATION
  )

  const nextStep = () => setStep(step + 1)

  const previousStep = () => setStep(step - 1)

  const onSubmit = () => {
    console.log('submit')
  }

  console.log(previousStep, nextStep, step, onSubmit)

  const accommodationFormStepTitle = {
    [ECreateAccommodationFormSteps.ACCOMMODATION]: 'Accommodation',
    [ECreateAccommodationFormSteps.OWNER]: 'Owner',
    [ECreateAccommodationFormSteps.SUMMARY]: 'Summary'
  }

  const accommodationFormSummary = <div>Summary</div>

  const fields = [
    {
      hidden: step === ECreateAccommodationFormSteps.SUMMARY,
      template: (
        <div className="mb-8 flex w-full items-center justify-center">
          <LabelTitle>{accommodationFormStepTitle[step]}</LabelTitle>
        </div>
      )
    },
    {
      label: 'Name',
      type: 'text' as const,
      className: 'w-full mb-2',
      hidden: step !== ECreateAccommodationFormSteps.ACCOMMODATION
    },
    {
      label: 'Address',
      type: 'text' as const,
      className: 'w-full mb-2',
      hidden: step !== ECreateAccommodationFormSteps.ACCOMMODATION
    },
    {
      label: 'Description',
      type: 'textarea' as const,
      className: 'w-full mb-2',
      hidden: step !== ECreateAccommodationFormSteps.ACCOMMODATION
    },
    {
      label: 'Type',
      type: 'dropdown' as const,
      options: [
        { value: 'apartment', label: 'Apartment' },
        { value: 'villa', label: 'Villa' },
        { value: 'house', label: 'House' }
      ],
      placeholder: 'Select a type',
      className: 'w-full mb-2',
      hidden: step !== ECreateAccommodationFormSteps.ACCOMMODATION
    },
    {
      label: 'Photos',
      type: 'text' as const,
      className: 'w-full mb-2',
      hidden: step !== ECreateAccommodationFormSteps.ACCOMMODATION
    },
    {
      label: 'Owner',
      type: 'text' as const,
      className: 'w-full mb-2',
      hidden: step !== ECreateAccommodationFormSteps.OWNER
    },
    {
      label: 'Owner Email',
      type: 'text' as const,
      className: 'w-full mb-2',
      hidden: step !== ECreateAccommodationFormSteps.OWNER
    },
    {
      label: 'Owner Phone',
      type: 'text' as const,
      className: 'w-full mb-2',
      hidden: step !== ECreateAccommodationFormSteps.OWNER
    },
    {
      template: accommodationFormSummary,
      hidden: step !== ECreateAccommodationFormSteps.SUMMARY
    }
  ]

  const actions = [
    {
      label: 'back',
      onClick: () => previousStep(),
      className:
        'text-orange-500 px-4 py-2 rounded-4xl hover:cursor-pointer hover:bg-gray-100 transition-colors duration-200 ',
      hidden: step === ECreateAccommodationFormSteps.ACCOMMODATION
    },
    {
      label: 'Next',
      onClick: () => nextStep(),
      className:
        'bg-orange-500 text-white px-4 py-2 rounded-4xl hover:cursor-pointer hover:bg-orange-600 transition-colors duration-200',
      hidden: step === ECreateAccommodationFormSteps.SUMMARY
    },
    {
      label: 'Submit',
      onClick: () => onSubmit(),
      className:
        'bg-orange-500 text-white px-4 py-2 rounded-4xl hover:cursor-pointer hover:bg-orange-600 transition-colors duration-200',
      hidden: [
        ECreateAccommodationFormSteps.ACCOMMODATION,
        ECreateAccommodationFormSteps.OWNER
      ].includes(step)
    }
  ]
  return (
    <div className="flex h-full w-full flex-col gap-5 p-5">
      <TurboForm
        className="flex h-full w-full flex-col gap-2"
        fields={fields}
        actions={actions}
        fieldsClassName="flex-1"
        actionsClassName="flex gap-2 justify-end items-center gap-2"
      />
    </div>
  )
}
