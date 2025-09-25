import type {
  TypeTurboFormSchemaValue,
  TypeTurboFormValues
} from '@/components/organisms'

export const validators: Record<
  string,
  (
    value: string | number | boolean | File[],
    ruleValue?: boolean | number | string | string[]
  ) => boolean
> = {
  required: (value) => value != null && value !== '',

  minLength: (value, ruleValue) => {
    if (value == null || value === '') return true
    return (
      typeof value === 'string' &&
      typeof ruleValue === 'number' &&
      value.length >= ruleValue
    )
  },

  maxLength: (value, ruleValue) => {
    if (value == null || value === '') return true
    return (
      (typeof value === 'string' &&
        typeof ruleValue === 'number' &&
        value.length <= ruleValue) ||
      (Array.isArray(value) &&
        typeof ruleValue === 'number' &&
        value.length <= ruleValue)
    )
  },
  numberIsNotAllowed: (value) =>
    typeof value === 'string' ? !/\d/.test(value) : true,

  email: (value) =>
    typeof value === 'string'
      ? value === '' || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
      : true,

  phone: (value) =>
    typeof value === 'string'
      ? value === '' || /^[0-9]{1,9}$/.test(value)
      : true,

  fileType: (value, ruleValue) => {
    if (!Array.isArray(value) || value.length === 0) return true
    const allowed = Array.isArray(ruleValue) ? ruleValue : [ruleValue]
    if (!allowed || allowed.length === 0) return true

    return value.every((file) => {
      const mime = file.type?.toLowerCase()
      const name = file.name?.toLowerCase()
      return allowed.some((entry) => {
        const rule = String(entry || '').toLowerCase()
        if (!rule) return true
        if (rule.includes('/')) {
          return mime === rule
        }
        const ext = rule.startsWith('.') ? rule : `.${rule}`
        return name.endsWith(ext)
      })
    })
  }
}

export const errorGetter = (
  key: string,
  values: TypeTurboFormValues,
  schema: Record<string, TypeTurboFormSchemaValue[]>
) => {
  const fieldValue = values[key]
  const fieldSchema = schema?.[key] || []
  let firstError: string | null = null

  for (const rule of fieldSchema) {
    const validator = validators[rule.type]
    if (validator && !validator(fieldValue, rule.value)) {
      firstError = rule.message
      break
    }
  }

  return firstError ? [firstError] : []
}
