import { useTranslation } from 'react-i18next'
import { LabelTitle } from '../../../../components/atoms'
import { useTurboFormContext } from '../../../../components/organisms'
import { FileUploadList } from '../../../../components/organisms/file-upload/components'

export const CreateAccommodationFormSummary = () => {
  const { t } = useTranslation()
  const { values } = useTurboFormContext()
  return (
    <div className="flex flex-col gap-4">
      <LabelTitle>
        {t('accomodations.createForm.step.accommodation')}
      </LabelTitle>
      <div className="flex flex-row gap-2">
        <div className="font-bold">
          {t('accomodations.createForm.field.name')}:
        </div>
        <div>{values.name as string}</div>
      </div>
      <div className="flex flex-row gap-2">
        <div className="font-bold">
          {t('accomodations.createForm.field.address')}:
        </div>
        <div>{values.address as string}</div>
      </div>
      <div className="flex flex-row gap-2">
        <div className="font-bold">
          {t('accomodations.createForm.field.description')}:
        </div>
        <div>{values.description as string}</div>
      </div>
      <div className="flex flex-row gap-2">
        <div className="font-bold">
          {t('accomodations.createForm.field.type')}:{' '}
        </div>
        <div>{values.type as string}</div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="font-bold">
          {t('accomodations.createForm.field.photos')}:
        </div>
        <FileUploadList files={values.photos as File[]} />
      </div>

      <LabelTitle>{t('accomodations.createForm.step.owner')}</LabelTitle>
      <div className="flex flex-row gap-2">
        <div className="font-bold">
          {t('accomodations.createForm.field.ownerName')}:
        </div>
        <div>{values.ownerName as string}</div>
      </div>
      <div className="flex flex-row gap-2">
        <div className="font-bold">
          {t('accomodations.createForm.field.ownerEmail')}:
        </div>
        <div>{values.ownerEmail as string}</div>
      </div>
      <div className="flex flex-row gap-2">
        <div className="font-bold">
          {t('accomodations.createForm.field.ownerPhone')}:
        </div>
        <div>{values.ownerPhone as string}</div>
      </div>
    </div>
  )
}
