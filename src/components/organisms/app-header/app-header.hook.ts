import { useTranslation } from 'react-i18next'

export const useAppHeader = () => {
  const { i18n } = useTranslation()

  const handleChangeLanguage = (value: string) => {
    i18n.changeLanguage(value)
  }

  return {
    handleChangeLanguage,
    languageDropdownOptions: [
      { value: 'en', label: 'English' },
      { value: 'es', label: 'Spanish' }
    ]
  }
}
