import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from 'react'

type State = Record<string, unknown>

interface GlobalStateProviderProps {
  children: ReactNode
}

export const GlobalStateContext = createContext<
  { state: State; setState: Dispatch<SetStateAction<State>> } | undefined
>(undefined)

export default function GlobalStateProvider({
  children,
}: GlobalStateProviderProps) {
  const [state, setState] = useState<State>({})

  return (
    <GlobalStateContext.Provider value={{ state, setState }}>
      {children}
    </GlobalStateContext.Provider>
  )
}
