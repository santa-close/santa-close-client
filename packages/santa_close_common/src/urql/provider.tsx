import {Provider} from 'urql'
import {ReactNode} from 'react'
import {urqlClient} from './client'

interface UrqlProviderProps {
  children: ReactNode
}

export const UrqlProvider = ({children}: UrqlProviderProps) => {
  return <Provider value={urqlClient}>{children}</Provider>
}
