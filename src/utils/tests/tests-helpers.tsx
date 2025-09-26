import { TurboFormProvider } from '@/components/organisms/turbo-form/providers'
import type { TypeTurboFormSchemaValue } from '@/components/organisms/turbo-form/interfaces'
import i18n from '@/i18n'
import { render } from '@testing-library/react'
import { I18nextProvider } from 'react-i18next'

export const renderWithI18n = (component: React.ReactElement) => {
  return render(<I18nextProvider i18n={i18n}>{component}</I18nextProvider>)
}

export const renderWithI18nAndTurboForm = (
  component: React.ReactElement,
  schema?: Record<string, TypeTurboFormSchemaValue[]>
) => {
  return render(
    <I18nextProvider i18n={i18n}>
      <TurboFormProvider schema={schema}>{component}</TurboFormProvider>
    </I18nextProvider>
  )
}
