import { Dropdown, Navbar } from '../../atoms'
import type { IAppHeaderProps } from './interfaces'
import { useAppHeader } from './app-header.hook'

export const AppHeader = ({ testId }: IAppHeaderProps) => {
  const { handleChangeLanguage, languageDropdownOptions } = useAppHeader()

  return (
    <Navbar testId={testId} className="flex items-center justify-between p-4">
      <div data-testid={`${testId}-logo-container`} className="w-[150px]">
        <img
          data-testid={`${testId}-logo`}
          src="/public/avantiologo.png"
          alt="logo"
          className="h-full w-full"
        />
      </div>
      <div
        data-testid={`${testId}-language-dropdown-container`}
        className="w-[150px]"
      >
        <Dropdown
          testId={`${testId}-language-dropdown`}
          options={languageDropdownOptions}
          onChange={handleChangeLanguage}
        />
      </div>
    </Navbar>
  )
}
