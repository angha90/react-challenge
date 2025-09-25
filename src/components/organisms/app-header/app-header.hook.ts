import { useTranslation } from 'react-i18next'

export const useAppHeader = () => {
  const { i18n, t } = useTranslation()

  const handleChangeLanguage = (value: string) => {
    i18n.changeLanguage(value)
  }

  return {
    handleChangeLanguage,
    languageDropdownOptions: [
      { value: 'en', label: t('languages.en') },
      { value: 'es', label: t('languages.es') }
    ]
  }
}
