import { Navbar } from '../../atoms'
import type { IAppHeaderProps } from './interfaces'

export const AppHeader = ({ testId }: IAppHeaderProps) => {
  return (
    <Navbar testId={testId}>
      <h1></h1>
    </Navbar>
  )
}
