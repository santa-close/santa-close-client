import {FC, ReactElement} from 'react'
import {Navigate} from 'react-router-dom'

interface ProtectedRouteProps {
  isAllowed: boolean
  redirectTo: string
  children: ReactElement
}

export const ProtectedRoute: FC<ProtectedRouteProps> = ({
  isAllowed,
  redirectTo,
  children,
}) => {
  if (!isAllowed) {
    return <Navigate replace to={redirectTo} />
  }

  return children
}
