import type { TypeTurboFormSchemaValue } from '../../../../components/organisms'

export const createAccommodationFormSchema: Record<
  string,
  TypeTurboFormSchemaValue[]
> = {
  name: [
    {
      type: 'required',
      message: 'Name is required'
    },
    {
      type: 'numberIsNotAllowed',
      message: 'Name must not contain numbers'
    },
    {
      type: 'minLength',
      message: 'Name must be at least 4 characters long',
      value: 4
    },
    {
      type: 'maxLength',
      message: 'Name must be less than 128 characters long',
      value: 128
    }
  ],
  address: [
    {
      type: 'required',
      message: 'Address is required'
    },
    {
      type: 'minLength',
      message: 'Address must be at least 4 characters long',
      value: 4
    },
    {
      type: 'maxLength',
      message: 'Address must be less than 128 characters long',
      value: 128
    }
  ],
  description: [
    {
      type: 'minLength',
      message: 'Description must be at least 128 characters long',
      value: 128
    },
    {
      type: 'maxLength',
      message: 'Description must be less than 2048 characters long',
      value: 2048
    }
  ],
  type: [
    {
      type: 'required',
      message: 'Type is required'
    }
  ],
  photos: [
    {
      type: 'maxLength',
      message: 'Photos must be less than 2 photos',
      value: 2
    }
  ],
  ownerName: [
    {
      type: 'required',
      message: 'Owner is required'
    },
    {
      type: 'minLength',
      message: 'Owner must be at least 4 characters long',
      value: 4
    },
    {
      type: 'maxLength',
      message: 'Owner must be less than 64 characters long',
      value: 64
    }
  ],
  ownerEmail: [
    {
      type: 'required',
      message: 'Owner email is required'
    },
    {
      type: 'email',
      message: 'Owner email is invalid'
    }
  ],
  ownerPhone: [
    {
      type: 'phone',
      message: 'Owner phone is invalid'
    }
  ]
}
