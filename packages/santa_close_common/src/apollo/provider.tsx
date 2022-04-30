import {ApolloProvider as Provider} from '@apollo/client'
import {ReactNode} from 'react'
import {apolloClient} from './client'

interface ApolloProviderProps {
  children: ReactNode
}

export const ApolloProvider = ({children}: ApolloProviderProps) => {
  return <Provider client={apolloClient}>{children}</Provider>
}
