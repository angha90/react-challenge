import { createContext, useContext } from 'react'
import type { ITurboFormContext } from '../../interfaces'

export const TurboFormContext = createContext<ITurboFormContext>(
  {} as ITurboFormContext
)

export const useTurboFormContext = () => {
  return useContext(TurboFormContext)
}
