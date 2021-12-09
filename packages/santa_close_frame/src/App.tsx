import React from 'react'

const Box = React.lazy(() => import('app_uikit/Box'))

export function App() {
  return (
    <div>
      <h1>{'This is Frame App'}</h1>
      <Box />
    </div>
  )
}
