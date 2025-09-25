import type { TypeTurboFormSchemaValue } from '@/components/organisms'

export const createAccommodationFormSchema: Record<
  string,
  TypeTurboFormSchemaValue[]
> = {
  name: [
    {
      type: 'required',
      message: 'accomodations.createForm.validations.nameRequired'
    },
    {
      type: 'numberIsNotAllowed',
      message: 'accomodations.createForm.validations.nameNumberIsNotAllowed'
    },
    {
      type: 'minLength',
      message: 'accomodations.createForm.validations.nameMinLength',
      value: 4
    },
    {
      type: 'maxLength',
      message: 'accomodations.createForm.validations.nameMaxLength',
      value: 128
    }
  ],
  address: [
    {
      type: 'required',
      message: 'accomodations.createForm.validations.addressRequired'
    },
    {
      type: 'minLength',
      message: 'accomodations.createForm.validations.addressMinLength',
      value: 4
    },
    {
      type: 'maxLength',
      message: 'accomodations.createForm.validations.addressMaxLength',
      value: 128
    }
  ],
  description: [
    {
      type: 'minLength',
      message: 'accomodations.createForm.validations.descriptionMinLength',
      value: 128
    },
    {
      type: 'maxLength',
      message: 'accomodations.createForm.validations.descriptionMaxLength',
      value: 2048
    }
  ],
  type: [
    {
      type: 'required',
      message: 'accomodations.createForm.validations.typeRequired'
    }
  ],
  photos: [
    {
      type: 'fileType',
      message: 'accomodations.createForm.validations.photosFileType',
      value: ['image/png', 'image/jpeg', '.png', '.jpg']
    },
    {
      type: 'maxLength',
      message: 'accomodations.createForm.validations.photosMaxLength',
      value: 2
    }
  ],
  ownerName: [
    {
      type: 'required',
      message: 'accomodations.createForm.validations.ownerNameRequired'
    },
    {
      type: 'minLength',
      message: 'accomodations.createForm.validations.ownerNameMinLength',
      value: 4
    },
    {
      type: 'maxLength',
      message: 'accomodations.createForm.validations.ownerNameMaxLength',
      value: 64
    }
  ],
  ownerEmail: [
    {
      type: 'required',
      message: 'accomodations.createForm.validations.ownerEmailRequired'
    },
    {
      type: 'email',
      message: 'accomodations.createForm.validations.ownerEmailInvalid'
    }
  ],
  ownerPhone: [
    {
      type: 'phone',
      message: 'accomodations.createForm.validations.ownerPhoneInvalid'
    }
  ]
}
