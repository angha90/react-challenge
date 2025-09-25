import { Dropdown, Navbar } from '../../atoms'
import type { IAppHeaderProps } from './interfaces'
import { useAppHeader } from './app-header.hook'

export const AppHeader = ({ testId }: IAppHeaderProps) => {
  const { handleChangeLanguage, languageDropdownOptions } = useAppHeader()

  return (
    <Navbar testId={testId} className="flex items-center justify-between p-4">
      <div className="w-[150px]">
        <img
          src="/public/avantiologo.png"
          alt="logo"
          className="h-full w-full"
        />
      </div>
      <div className="w-[150px]">
        <Dropdown
          options={languageDropdownOptions}
          onChange={handleChangeLanguage}
        />
      </div>
    </Navbar>
  )
}
